document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");

    // Menampilkan menu saat mouse masuk ke header
    header.addEventListener("mouseenter", () => {
        nav.style.display = "block";
        nav.style.opacity = "1";
    });

    // Menyembunyikan menu saat mouse keluar dari header
    header.addEventListener("mouseleave", () => {
        nav.style.opacity = "0";
        setTimeout(() => {
            nav.style.display = "none";
        }, 300); // Memberikan efek fade-out
    });

    // Date & Time Update
    const updateDateTime = () => {
        const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

        const now = new Date();
        document.getElementById("hari").textContent = days[now.getDay()];
        document.getElementById("tanggal").textContent = now.getDate();
        document.getElementById("bulan").textContent = months[now.getMonth()];
        document.getElementById("tahun").textContent = now.getFullYear();

        const formatTime = (num) => num.toString().padStart(2, "0");

        document.getElementById("hour").textContent = formatTime(now.getHours());
        document.getElementById("min").textContent = formatTime(now.getMinutes());
        document.getElementById("sec").textContent = formatTime(now.getSeconds());
    };

    setInterval(updateDateTime, 1000);
    updateDateTime();
});
