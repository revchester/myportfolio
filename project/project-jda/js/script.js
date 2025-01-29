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

/*
document.addEventListener("DOMContentLoaded", function() {
    // Handle project item hover effect
    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateY(-5px)";
            item.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.2)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateY(0)";
            item.style.boxShadow = "none";
        });
    });

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Toggle menu for responsive navigation
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        });
    }
});
*/
// JavaScript for dynamic year in footer
document.getElementById('displayYear').textContent = new Date().getFullYear();