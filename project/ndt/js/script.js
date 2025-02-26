// Toggle Menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
    document.querySelector(".hamburger").classList.toggle("active");
}

// Update Clock
function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    document.getElementById("clock").textContent = hours + ":" + minutes + ":" + seconds;
}

// Update Calendar
function updateCalendar() {
    let now = new Date();
    let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    document.getElementById("calendar").textContent = now.toLocaleDateString("id-ID", options);
}

// Menjalankan Jam dan Kalender
setInterval(updateClock, 1000);
updateCalendar();
updateClock();

let currentSlide = 0;
const images = [
    "../../brush/image/project/ndt/ndt-01.jpg",
    "../../brush/image/project/ndt/ndt-02.jpg",
    "../../brush/image/project/ndt/ndt-03.jpg",
    "../../brush/image/project/ndt/ndt-04.jpg",
    "../../brush/image/project/ndt/ndt-05.jpg",
    "../../brush/image/project/ndt/ndt-06.jpg",
    "../../brush/image/project/ndt/ndt-07.jpg",
    "../../brush/image/project/ndt/ndt-08.jpg",
    "../../brush/image/project/ndt/ndt-09.jpg",
    "../../brush/image/project/ndt/ndt-10.jpg",
    "../../brush/image/project/ndt/ndt-11.jpg",
    "../../brush/image/project/ndt/ndt-12.jpg",
    "../../brush/image/project/ndt/ndt-13.jpg",
    "../../brush/image/project/ndt/ndt-14.jpg",
    "../../brush/image/project/ndt/ndt-15.jpg",
    "../../brush/image/project/ndt/ndt-16.jpg",
    "../../brush/image/project/ndt/ndt-17.jpg",
    "../../brush/image/project/ndt/ndt-18.jpg",
    "../../brush/image/project/ndt/ndt-19.jpg",
    "../../brush/image/project/ndt/ndt-20.jpg",
    "../../brush/image/project/ndt/ndt-24.jpg",
    "../../brush/image/project/ndt/ndt-25.jpg",
    "../../brush/image/project/ndt/ndt-26.jpg",
    "../../brush/image/project/ndt/ndt-27.jpg",
    "../../brush/image/project/ndt/ndt-28.jpg",
    "../../brush/image/project/ndt/ndt-29.jpg",
    "../../brush/image/project/ndt/ndt-30.jpg",
    "../../brush/image/project/ndt/ndt-31.jpg",
    "../../brush/image/project/ndt/ndt-32.jpg",
    "../../brush/image/project/ndt/ndt-33.jpg",
    "../../brush/image/project/ndt/ndt-34.jpg",
    "../../brush/image/project/ndt/ndt-35.jpg",
    "../../brush/image/project/ndt/ndt-36.jpg",
    "../../brush/image/project/ndt/ndt-37.jpg",
    "../../brush/image/project/ndt/ndt-38.jpg",
    "../../brush/image/project/ndt/ndt-39.jpg",
    "../../brush/image/project/ndt/ndt-40.jpg",
    "../../brush/image/project/ndt/ndt-41.jpg",
    "../../brush/image/project/ndt/ndt-42.jpg",
    "../../brush/image/project/ndt/ndt-43.jpg",
    "../../brush/image/project/ndt/ndt-44.jpg",
    "../../brush/image/project/ndt/ndt-45.jpg",
    "../../brush/image/project/ndt/ndt-46.jpg",
    "../../brush/image/project/ndt/ndt-47.jpg",
    "../../brush/image/project/ndt/ndt-48.jpg",
    "../../brush/image/project/ndt/ndt-49.jpg",
    "../../brush/image/project/ndt/ndt-50.jpg",
    "../../brush/image/project/ndt/ndt-51.jpg",
    "../../brush/image/project/ndt/ndt-52.jpg",
    "../../brush/image/project/ndt/ndt-53.jpg",
    "../../brush/image/project/ndt/ndt-54.jpg",
    "../../brush/image/project/ndt/ndt-55.jpg",
    "../../brush/image/project/ndt/ndt-56.jpg",
    "../../brush/image/project/ndt/ndt-57.jpg",
    "../../brush/image/project/ndt/ndt-58.jpg",
    "../../brush/image/project/ndt/ndt-59.jpg",
    "../../brush/image/project/ndt/ndt-60.jpg",
    "../../brush/image/project/ndt/ndt-61.jpg",
    "../../brush/image/project/ndt/ndt-62.jpg",
    "../../brush/image/project/ndt/ndt-63.jpg",
    "../../brush/image/project/ndt/ndt-64.jpg",
    "../../brush/image/project/ndt/ndt-65.jpg",
    "../../brush/image/project/ndt/ndt-66.jpg",
    "../../brush/image/project/ndt/ndt-67.jpg",
    "../../brush/image/project/ndt/ndt-68.jpg"
];
/*
function showSlide(index) {
    const preview = document.getElementById('imagePreview');
    preview.innerHTML = `<img src="${images[index]}" alt="NDT Image ${index + 1}" class="slide">`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlide(currentSlide);
}

// Fungsi untuk mengganti slide otomatis setiap 3 detik
function startAutoSlide() {
    setInterval(nextSlide, 3000); // 3000 milidetik = 3 detik
}

// Initialize the first slide
showSlide(currentSlide);

// Mulai auto slide
startAutoSlide();
*/

let currentIndex = 0;

function changeBackground() {
    document.body.style.background = `url('${images[currentIndex]}') no-repeat top center/95% scroll`;
//    document.querySelector('.container').style.background = `url('${images[currentIndex]}') no-repeat center center/100% fixed`;

    currentIndex = (currentIndex + 1) % images.length;
}

// Ganti background setiap 3 detik
setInterval(changeBackground, 3000);
changeBackground();