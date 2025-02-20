/* js/script.js */

function updateDateTime() {
    const now = new Date();

    // Format nama hari dalam Bahasa Indonesia
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const dayName = days[now.getDay()];

    // Format nama bulan dalam Bahasa Indonesia
    const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    const monthName = months[now.getMonth()];

    // Mengambil tanggal dan tahun
    const date = now.getDate();
    const year = now.getFullYear();

    // Mengambil komponen waktu
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // Tambahkan angka nol di depan bila nilainya kurang dari 10
    hour = hour < 10 ? '0' + hour : hour;
    min  = min  < 10 ? '0' + min  : min;
    sec  = sec  < 10 ? '0' + sec  : sec;

    // Memperbarui konten HTML dengan tanggal dan waktu
    document.getElementById('hari').textContent = dayName;
    document.getElementById('tanggal').textContent = date;
    document.getElementById('bulan').textContent = monthName;
    document.getElementById('tahun').textContent = year;
    document.getElementById('hour').textContent = hour;
    document.getElementById('min').textContent = min;
    document.getElementById('sec').textContent = sec;
}

// Memperbarui tanggal dan waktu setiap 1 detik
setInterval(updateDateTime, 1000);

// Panggil fungsi updateDateTime saat halaman pertama kali dimuat
updateDateTime();

//  search and filter
// Variabel global
let currentFilter = "all";
let currentPage = 1;
let rowsPerPage = 25;

// Fungsi utama untuk memperbarui tampilan tabel (pencarian, filter, dan pagination)
function updateTableDisplay() {
const searchValue = document.getElementById("searchInput").value.toUpperCase();
const table = document.querySelector(".database-table");
const tbody = table.tBodies[0];
const allRows = Array.from(tbody.rows);
let filteredRows = [];

// Filter berdasarkan pencarian dan tombol filter
allRows.forEach(row => {
    const rowText = row.textContent.toUpperCase();
    const matchesSearch = rowText.indexOf(searchValue) > -1;
    // Ambil sel yang berisi "Jenis Badan Hukum" (misal, kolom ke-3, indeks 2)
    const cell = row.cells[2];
    const matchesFilter =
    currentFilter === "all" || (cell && cell.classList.contains(currentFilter));
    if (matchesSearch && matchesFilter) {
    filteredRows.push(row);
    } else {
    row.style.display = "none";
    }
});

// Hitung total halaman dari data yang telah difilter
const totalRows = filteredRows.length;
const totalPages = Math.ceil(totalRows / rowsPerPage);
if (currentPage > totalPages) currentPage = totalPages;
if (totalPages === 0) currentPage = 1;

// Tampilkan baris berdasarkan halaman saat ini
const startIndex = (currentPage - 1) * rowsPerPage;
filteredRows.forEach((row, index) => {
    if (index >= startIndex && index < startIndex + rowsPerPage) {
    row.style.display = "";
    // Nomor urut bersifat kontinyu (bisa diubah agar nomor per halaman dimulai dari 1)
    row.cells[0].textContent = index + 1;
    } else {
    row.style.display = "none";
    }
});

updatePagination(totalPages);
}

// Fungsi pencarian
function searchTable() {
currentPage = 1;
updateTableDisplay();
}

// Fungsi untuk menghapus isi pencarian
function clearSearch() {
document.getElementById("searchInput").value = "";
currentPage = 1;
updateTableDisplay();
}

// Fungsi filter berdasarkan tombol filter
function filterTable(filter) {
currentFilter = filter;
currentPage = 1;
// Perbarui tampilan tombol aktif
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-filter") === filter);
});
updateTableDisplay();
}

// Fungsi mengubah jumlah baris per halaman
function changeRowsPerPage() {
rowsPerPage = parseInt(document.getElementById("rowsPerPageSelect").value, 10);
currentPage = 1;
updateTableDisplay();
}

// Fungsi untuk membuat tombol pagination
function updatePagination(totalPages) {
const paginationDiv = document.getElementById("pagination");
paginationDiv.innerHTML = "";
for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", function() {
    currentPage = i;
    updateTableDisplay();
    });
    paginationDiv.appendChild(btn);
}
}

// Inisialisasi tampilan tabel saat halaman sudah dimuat
document.addEventListener("DOMContentLoaded", function () {
updateTableDisplay();
});

//  display year
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("displayYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});