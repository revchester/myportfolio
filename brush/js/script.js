function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('datetime').textContent = now.toLocaleDateString('en-US', options);
}
setInterval(updateDateTime, 1000);
updateDateTime();

//  slide show
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}

showSlides();

//  click on menu
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.forEach((nav) => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

// Certificate filtering
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".certificate-category button");
    const items = document.querySelectorAll(".certificate-item");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.getAttribute("data-category");

            // Show all items if "all" is selected, else filter by category
            items.forEach(item => {
                if (category === "all" || item.classList.contains(category)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

// Open modal
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalDesc = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close-modal");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentIndex = 0;
    let images = [];
    let descriptions = [];
    let isZoomed = false;
    let startX = 0, startY = 0, moveX = 0, moveY = 0;

    // Mengambil semua elemen certificate-item
    document.querySelectorAll(".certificate-item").forEach((item, index) => {
        item.addEventListener("click", function () {
            images = Array.from(document.querySelectorAll(".certificate-item img")).map(img => img.src);
            descriptions = Array.from(document.querySelectorAll(".certificate-item img")).map(img => img.alt);
            currentIndex = index;
            openModal();
        });
    });

    function openModal() {
        modal.style.display = "flex";
        modalImg.src = images[currentIndex];
        modalDesc.textContent = descriptions[currentIndex];
        modalImg.classList.remove("zoomed"); // Reset zoom saat modal dibuka
        modalImg.style.transform = "scale(1) translate(0, 0)";
        isZoomed = false;
    }

    function closeModalFunction() {
        modal.style.display = "none";
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openModal();
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        openModal();
    }

    // Event Listeners
    closeModal.addEventListener("click", closeModalFunction);
    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);

    // Close modal saat klik di luar gambar
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });

    // Zoom & Drag Functionality
    modalImg.addEventListener("click", function (e) {
        if (!isZoomed) {
            let rect = modalImg.getBoundingClientRect();
            let offsetX = ((e.clientX - rect.left) / rect.width) * 100;
            let offsetY = ((e.clientY - rect.top) / rect.height) * 100;

            modalImg.style.transformOrigin = `${offsetX}% ${offsetY}%`;
            modalImg.style.transform = "scale(2)";
            modalImg.classList.add("zoomed");
            isZoomed = true;
        } else {
            modalImg.style.transform = "scale(1) translate(0, 0)";
            modalImg.classList.remove("zoomed");
            isZoomed = false;
        }
    });

    // Drag saat zoom
    modalImg.addEventListener("mousedown", function (e) {
        if (isZoomed) {
            startX = e.clientX - moveX;
            startY = e.clientY - moveY;
            modalImg.style.cursor = "grabbing";
            
            function moveImage(e) {
                moveX = e.clientX - startX;
                moveY = e.clientY - startY;
                modalImg.style.transform = `scale(2) translate(${moveX}px, ${moveY}px)`;
            }

            function stopDragging() {
                window.removeEventListener("mousemove", moveImage);
                window.removeEventListener("mouseup", stopDragging);
                modalImg.style.cursor = "grab";
            }

            window.addEventListener("mousemove", moveImage);
            window.addEventListener("mouseup", stopDragging);
        }
    });

    // Zoom In & Out dengan Scroll
    modalImg.addEventListener("wheel", function (e) {
        e.preventDefault();
        if (e.deltaY < 0) { // Scroll ke atas (Zoom in)
            modalImg.style.transform = "scale(2)";
            modalImg.classList.add("zoomed");
            isZoomed = true;
        } else { // Scroll ke bawah (Zoom out)
            modalImg.style.transform = "scale(1) translate(0, 0)";
            modalImg.classList.remove("zoomed");
            isZoomed = false;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".certificate-category button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Hapus class active dari semua button
            buttons.forEach(btn => btn.classList.remove("active"));

            // Tambahkan class active ke button yang diklik
            this.classList.add("active");

            // Ambil kategori yang dipilih
            const category = this.getAttribute("data-category");

            // Tampilkan hanya sertifikat yang sesuai kategori
            const certificates = document.querySelectorAll(".certificate-item");

            certificates.forEach(cert => {
                if (category === "all" || cert.classList.contains(category)) {
                    cert.style.display = "block";
                } else {
                    cert.style.display = "none";
                }
            });
        });
    });
});

// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();