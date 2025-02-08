// JavaScript for dynamic year in footer
document.getElementById('displayYear').textContent = new Date().getFullYear();

function updateClock() {
    // Mendapatkan waktu saat ini
    const now = new Date();

    // Mendapatkan hari dalam seminggu (0 = Minggu, 1 = Senin, ..., 6 = Sabtu)
    const dayOfWeek = now.getDay();

    // Mendapatkan jam, menit, detik, dan AM/PM
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Mengubah format jam ke 12 jam
    hours = hours % 12 || 12;

    // Mendapatkan tanggal, bulan, dan tahun
    const year = now.getFullYear();
    const month = now.toLocaleString('default', { month: 'short' });
    const day = now.getDate().toString().padStart(2, '0');

    // Memperbarui hari dalam seminggu
    const daysOfWeek = ['sun', 'mon', 'tus', 'wed', 'thu', 'fri', 'sat'];
    daysOfWeek.forEach((day, index) => {
        const element = document.getElementById(day);
        if (index === dayOfWeek) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });

    // Memperbarui waktu
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('min').textContent = minutes;
    document.getElementById('sec').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;

    // Memperbarui tanggal
    document.getElementById('year').textContent = year;
    document.getElementById('month').textContent = month;
    document.getElementById('day').textContent = day;
}

// Memperbarui jam setiap detik
setInterval(updateClock, 1000);

// Memanggil fungsi pertama kali untuk menghindari penundaan 1 detik
updateClock();

function openMavenTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="maven-tabcontent" and hide them
    tabcontent = document.getElementsByClassName("maven-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="maven-tablink" and remove the class "active"
    tablinks = document.getElementsByClassName("maven-tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set the default tab to be opened
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".maven-tablink").click();
});