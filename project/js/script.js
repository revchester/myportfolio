document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("displayYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

//  datetime
function updateDateTime() {
    const hariElement = document.getElementById("hari");
    const tanggalElement = document.getElementById("tanggal");
    const bulanElement = document.getElementById("bulan");
    const tahunElement = document.getElementById("tahun");
    const hourElement = document.getElementById("hour");
    const minElement = document.getElementById("min");
    const secElement = document.getElementById("sec");

    const hariArray = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const bulanArray = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let now = new Date();
    let hari = hariArray[now.getDay()];
    let tanggal = now.getDate();
    let bulan = bulanArray[now.getMonth()];
    let tahun = now.getFullYear();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // Format angka agar selalu dua digit
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // Menampilkan data ke elemen HTML
    hariElement.textContent = hari + ",";
    tanggalElement.textContent = tanggal;
    bulanElement.textContent = bulan;
    tahunElement.textContent = tahun;
    hourElement.textContent = hour;
    minElement.textContent = min;
    secElement.textContent = sec;
}

// Update setiap detik
setInterval(updateDateTime, 1000);
updateDateTime(); // Menjalankan pertama kali
