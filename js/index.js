// Jam Digital
function updateClock() {
    const now = new Date();
    const jam = now.getHours().toString().padStart(2, '0');
    const menit = now.getMinutes().toString().padStart(2, '0');
    const detik = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('jam').textContent = jam;
    document.getElementById('menit').textContent = menit;
    document.getElementById('detik').textContent = detik;
}

// Kalender Digital (Bahasa Indonesia)
function updateKalender() {
    const now = new Date();
    const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    const tahun = now.getFullYear();
    const namaBulan = bulan[now.getMonth()];
    const tanggal = now.getDate();
    const namaHari = hari[now.getDay()];

    document.getElementById('tahun').textContent = tahun;
    document.getElementById('bulan').textContent = namaBulan;
    document.getElementById('tanggal').textContent = tanggal;
    document.getElementById('hari').textContent = namaHari;
}

// Panggil fungsi setiap detik
setInterval(updateClock, 1000);
setInterval(updateKalender, 1000);

//  re-new date and time javascript ends

/*
//  back to top button
// Ambil tombol
var backToTopBtn = document.getElementById("backToTopBtn");

// Saat pengguna scroll ke bawah 20px dari atas halaman, tampilkan tombol
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Saat tombol diklik, kembali ke atas halaman
backToTopBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

//  membuat tooltip
document.addEventListener('DOMContentLoaded', function() {
    // Temukan semua elemen dengan class tooltip
    const tooltips = document.querySelectorAll('.tooltip');
    const tooltipContainer = document.createElement('div');
    
    // Buat elemen container tooltip
    tooltipContainer.classList.add('tooltip-container');
    tooltipContainer.innerHTML = `
        <div class="tooltip-title"></div>
        <div class="tooltip-description"></div>
    `;
    
    // Tambahkan container ke dalam body
    document.body.appendChild(tooltipContainer);
    
    // Tambahkan event listener untuk mouseover dan mouseout pada elemen tooltip
    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('mouseover', function() {
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            
            // Isi judul dan deskripsi tooltip
            tooltipContainer.querySelector('.tooltip-title').textContent = title;
            tooltipContainer.querySelector('.tooltip-description').textContent = description;
            
            // Tampilkan tooltip
            tooltipContainer.classList.add('show');
        });
        
        tooltip.addEventListener('mouseout', function() {
            // Sembunyikan tooltip
            tooltipContainer.classList.remove('show');
        });
    });
});*/

// Tombol Kembali ke Atas
var backToTopBtn = document.getElementById("backToTopBtn");

// Saat pengguna scroll ke bawah 20px dari atas halaman, tampilkan tombol
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Saat tombol diklik, kembali ke atas halaman
backToTopBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Membuat tooltip
document.addEventListener('DOMContentLoaded', function() {
    // Temukan semua elemen dengan class tooltip
    const tooltips = document.querySelectorAll('.tooltip');
    const tooltipContainer = document.createElement('div');
    
    // Buat elemen container tooltip
    tooltipContainer.classList.add('tooltip-container');
    tooltipContainer.innerHTML = `
        <div class="tooltip-title"></div>
        <div class="tooltip-description"></div>
    `;
    
    // Tambahkan container ke dalam body
    document.body.appendChild(tooltipContainer);
    
    // Tambahkan event listener untuk mouseover dan mouseout pada elemen tooltip
    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('mouseover', function(event) {
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            
            // Isi judul dan deskripsi tooltip
            tooltipContainer.querySelector('.tooltip-title').textContent = title;
            tooltipContainer.querySelector('.tooltip-description').textContent = description;
            
            // Tampilkan tooltip
            tooltipContainer.classList.add('show');
        });
        
        tooltip.addEventListener('mouseout', function() {
            // Sembunyikan tooltip
            tooltipContainer.classList.remove('show');
        });
    });
});

//  preview image NDT project
// Select all images and the preview image element
const images = document.querySelectorAll('.ndt-project-item-gallery img');
const previewImg = document.getElementById('preview-img');

// Function to get a random image
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex].src;
    return randomImage;
}

// Function to update the preview image
function updatePreviewImage() {
    const randomImageSrc = getRandomImage();
    previewImg.src = randomImageSrc;
}

// Set an interval to update the image every 2 seconds
setInterval(updatePreviewImage, 2000);


//  active image
document.addEventListener("DOMContentLoaded", function() {
    const certificationItems = document.querySelectorAll('.certification-item');

    certificationItems.forEach(item => {
        let images = item.querySelectorAll('img');
        let currentImageIndex = 0;

        // Tampilkan gambar pertama
        images[currentImageIndex].classList.add('active-img');

        // Ganti gambar setiap 3 detik
        setInterval(() => {
            images[currentImageIndex].classList.remove('active-img');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].classList.add('active-img');
        }, 3000); // 3000ms = 3 detik
    });
});