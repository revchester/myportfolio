function updateTime() {
    const now = new Date();

    // Data tanggal
    const year = now.getFullYear();
    const month = now.toLocaleString('id', { month: 'long' });
    const day = now.getDate();
    const weekday = now.toLocaleString('id', { weekday: 'long' });

    // Data waktu
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Update kalender
    const yearElement = document.getElementById('year');
    const monthElement = document.getElementById('month');
    const dayElement = document.getElementById('day');
    const weekdayElement = document.getElementById('weekday');

    if (yearElement && monthElement && dayElement && weekdayElement) {
        yearElement.textContent = year;
        monthElement.textContent = month;
        dayElement.textContent = day;
        weekdayElement.textContent = weekday;
    }

    // Update jam digital
    /*
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    if (hoursElement && minutesElement && secondsElement) {
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }*/
}

const $ = (selector) => {
    return document.querySelector(selector);
}
const hour = $ ('.hour');
const min = $ ('.min');
const dot = $ ('.dot');
const sec = $ ('.sec');
const week = $ ('.week');
let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();

    if (showDot) {
        dot.classList.add('invisible');
    } else {
        dot.classList.remove('invisible');
    }
    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    sec.textContent = String(now.getSeconds()).padStart(2, '0');

    Array
        .from(week.children)
        .forEach(
            (ele) => {
                ele.classList.remove('active');
            }
        );
    week
        .children[now.getDay()]
        .classList
        .add('active');
}

// Update waktu setiap detik
setInterval(updateTime, 1000);
updateTime();
setInterval(update, 1000);

// Ganti background setiap 3 detik
const images = [
    './brush/image/project/ndt/ndt-17.jpg',
    './brush/image/project/ndt/ndt-53.jpg',
    './brush/image/project/ndt/ndt-54.jpg',
    './brush/image/project/ndt/ndt-61.jpg',
    './brush/image/project/ndt/ndt-64.jpg',
    './brush/image/project/ndt/ndt-66.jpg'
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.background = `url('${images[currentIndex]}') no-repeat top center/cover fixed`;
//    document.querySelector('.container').style.background = `url('${images[currentIndex]}') no-repeat center center/100% fixed`;

    currentIndex = (currentIndex + 1) % images.length;
}

// Ganti background setiap 3 detik
setInterval(changeBackground, 3000);
changeBackground();