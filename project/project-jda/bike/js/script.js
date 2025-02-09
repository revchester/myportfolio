document.addEventListener("DOMContentLoaded", function () {
    function updateTime() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById("hours").innerText = hours;
        document.getElementById("min").innerText = minutes;
        document.getElementById("sec").innerText = seconds;
        document.getElementById("ampm").innerText = ampm;
    }

    function updateDate() {
        let now = new Date();
        let days = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];
        let months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
        
        let day = now.getDate();
        let month = now.getMonth();
        let year = now.getFullYear();
        let dayOfWeek = now.getDay();

        document.getElementById("day").innerText = day;
        document.getElementById("month").innerText = months[month];
        document.getElementById("year").innerText = year;

        document.querySelectorAll(".days-of-week span").forEach((el, index) => {
            el.classList.toggle("active", index === dayOfWeek);
        });
    }

    updateTime();
    updateDate();
    setInterval(updateTime, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    // Menampilkan tahun saat ini di elemen dengan ID displayYear
    document.getElementById("displayYear").innerText = new Date().getFullYear();
});
