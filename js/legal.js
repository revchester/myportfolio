//  tab-container
function showTab(event, tabId) {
    // Hapus kelas 'active' dari semua tombol tab
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Sembunyikan semua konten tab
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Tampilkan konten tab yang dipilih
    document.getElementById(tabId).style.display = "block";

    // Tambahkan kelas 'active' ke tombol tab yang dipilih
    event.currentTarget.classList.add("active");

    // Update nomor urut secara otomatis di tabel
    updateTableNumbering(tabId);
}

// Fungsi untuk memberikan nomor urut otomatis pada tabel
function updateTableNumbering(tabId) {
    var table = document.querySelector(`#${tabId} table tbody`);
    var rows = table.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        rows[i].getElementsByTagName('td')[0].innerText = i + 1;  // Set nomor urut
    }
}

// Tampilkan tab pertama secara default dan nomor otomatis
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("pt").style.display = "block";
    document.querySelector(".tab-button").classList.add("active");
    updateTableNumbering('pt');  // Set nomor otomatis untuk tab pertama
});

//  pencarian isi tabel
function searchTable() {
    // Ambil input pencarian
    var input = document.getElementById("searchInput");
    var filter = input.value.toLowerCase();
    
    // Ambil semua tabel dari tab yang sedang aktif
    var tabContent = document.querySelector('.tab-content[style="display: block;"]');
    var table = tabContent.getElementsByTagName("table")[0];
    var tr = table.getElementsByTagName("tr");

    // Loop melalui semua baris di dalam tabel
    for (var i = 1; i < tr.length; i++) {  // Mulai dari 1 untuk melewati header
        var tdArray = tr[i].getElementsByTagName("td");
        var match = false;

        // Loop melalui semua kolom dalam baris
        for (var j = 0; j < tdArray.length; j++) {
            if (tdArray[j]) {
                var txtValue = tdArray[j].textContent || tdArray[j].innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    match = true; // Jika ada kolom yang cocok, baris akan tampil
                }
            }
        }
        
        // Tampilkan atau sembunyikan baris sesuai hasil pencarian
        tr[i].style.display = match ? "" : "none";
    }
}

// Fungsi untuk menghapus isi kotak pencarian
function clearSearch() {
    document.getElementById('searchInput').value = ''; // Kosongkan input
    searchTable(); // Refresh hasil pencarian
    document.querySelector('.clear-icon').style.display = 'none'; // Sembunyikan ikon xmark
}

// Fungsi untuk menampilkan/menyembunyikan ikon xmark saat ada teks
document.getElementById('searchInput').addEventListener('input', function() {
    if (this.value.length > 0) {
        document.querySelector('.clear-icon').style.display = 'block'; // Tampilkan ikon xmark
    } else {
        document.querySelector('.clear-icon').style.display = 'none'; // Sembunyikan ikon xmark
    }
});


//  pagination

/*
var currentPage = 1;
var rowsPerPage = 10;

function displayPage(tabId, page) {
    var table = document.querySelector(`#${tabId} table tbody`);
    var rows = table.getElementsByTagName('tr');
    var totalPages = Math.ceil(rows.length / rowsPerPage);

    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    // Hide all rows
    for (var i = 0; i < rows.length; i++) {
        rows[i].style.display = "none";
    }

    // Display the rows for the current page
    for (var i = (page - 1) * rowsPerPage; i < (page * rowsPerPage) && i < rows.length; i++) {
        rows[i].style.display = "";
    }

    // Update the page info
    document.getElementById('pageInfo').textContent = `Page ${page} of ${totalPages}`;
    currentPage = page;
}

function changePage(direction) {
    var activeTab = document.querySelector('.tab-content[style="display: block;"]').id;
    displayPage(activeTab, currentPage + direction);
}

// Call the function when the page is loaded or when a new tab is shown
document.addEventListener("DOMContentLoaded", function () {
    displayPage('pt', 1);  // Display the first page of the 'pt' tab by default
});

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        displayPage(this.getAttribute('data-tab-id'), 1);  // Reset to first page on tab change
    });
});

// Panggil fungsi displayPage ketika tab berubah
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        var tabId = this.getAttribute('onclick').match(/'(.*?)'/)[1]; // Dapatkan ID tab dari onclick
        displayPage(tabId, 1);  // Reset pagination ke halaman 1 setiap kali tab berubah
    });
});
*/

var currentPage = 1;
var rowsPerPage = 10;

function displayPage(tabId, page) {
    var table = document.querySelector(`#${tabId} table tbody`);
    if (!table) return;

    var rows = table.getElementsByTagName('tr');
    var totalPages = Math.ceil(rows.length / rowsPerPage);

    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    // Hide all rows
    for (var i = 0; i < rows.length; i++) {
        rows[i].style.display = "none";
    }

    // Display the rows for the current page
    for (var i = (page - 1) * rowsPerPage; i < (page * rowsPerPage) && i < rows.length; i++) {
        rows[i].style.display = "";
    }

    // Update the page info
    document.getElementById('pageInfo').textContent = `Halaman ${page} dari ${totalPages}`;
    currentPage = page;

    // Generate pagination numbers
    displayPaginationNumbers(tabId, totalPages);

    // Update the disabled state of the Previous and Next buttons
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;
}

function displayPaginationNumbers(tabId, totalPages) {
    var paginationContainer = document.getElementById('paginationNumbers');
    paginationContainer.innerHTML = '';  // Clear previous pagination

    var maxVisiblePages = 5;
    var startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    var endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    // Adjust startPage if endPage is at the last part of totalPages
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    // Display page numbers
    for (let i = startPage; i <= endPage; i++) {
        addPageButton(paginationContainer, tabId, i);
    }
}

function addPageButton(paginationContainer, tabId, pageNumber) {
    var pageButton = document.createElement('button');
    pageButton.textContent = pageNumber;
    pageButton.onclick = function() {
        displayPage(tabId, pageNumber);
    };
    if (pageNumber === currentPage) {
        pageButton.classList.add('active');  // Mark active page
    }
    paginationContainer.appendChild(pageButton);
}

function changePage(direction) {
    var activeTab = document.querySelector('.tab-content[style="display: block;"]').id;
    displayPage(activeTab, currentPage + direction);
}

// Function to load the first page when the page is loaded or when the tab is changed
document.addEventListener("DOMContentLoaded", function () {
    displayPage('pt', 1);  // Load the first page by default

    // Add event listener for each tab button
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            var tabId = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            displayPage(tabId, 1);  // Reset to the first page when the tab is changed
        });
    });
});
