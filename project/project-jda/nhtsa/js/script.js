document.addEventListener('DOMContentLoaded', () => {
    // Kalender Setup
    const calendarDays = document.getElementById('calendar-days');
    const currentMonthYear = document.getElementById('currentMonthYear');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
  
    let currentDate = new Date();
  
    function renderCalendar(date) {
      const year = date.getFullYear();
      const month = date.getMonth();
  
      // Format header bulan & tahun (misal: "Mei 2025")
      currentMonthYear.textContent = new Intl.DateTimeFormat('id-ID', {
        month: 'long',
        year: 'numeric'
      }).format(date);
  
      calendarDays.innerHTML = '';
  
      // Hari pertama bulan ini
      const firstDayOfMonth = new Date(year, month, 1);
      // Jumlah hari dalam bulan ini
      const totalDays = new Date(year, month + 1, 0).getDate();
      // Indeks hari pertama (0 = Minggu, 6 = Sabtu)
      const startDayIndex = firstDayOfMonth.getDay();
  
      // Tambahkan sel kosong untuk hari sebelum tanggal 1
      for (let i = 0; i < startDayIndex; i++) {
        const emptyCell = document.createElement('div');
        calendarDays.appendChild(emptyCell);
      }
  
      // Tambahkan tanggal-tanggal bulan ini
      for (let day = 1; day <= totalDays; day++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = day;
        const today = new Date();
        if (
          day === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear()
        ) {
          dayCell.classList.add('today');
        }
        calendarDays.appendChild(dayCell);
      }
    }
  
    prevMonthButton.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar(currentDate);
    });
  
    nextMonthButton.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate);
    });
  
    renderCalendar(currentDate);
  
    // Jam Analog & Digital
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    const digitalClock = document.getElementById('digitalClock');
  
    function updateClock() {
      const now = new Date();
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
  
      // Hitung derajat untuk masing-masing jarum
      const hourAngle = (hours * 30) + (minutes * 0.5);
      const minuteAngle = (minutes * 6) + (seconds * 0.1);
      const secondAngle = seconds * 6;
  
      hourHand.style.transform = `rotate(${hourAngle}deg)`;
      minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
      secondHand.style.transform = `rotate(${secondAngle}deg)`;
  
      // Update jam digital
      digitalClock.textContent = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }
  
    setInterval(updateClock, 1000);
    updateClock();
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Menampilkan tahun saat ini di elemen dengan ID displayYear
    document.getElementById("displayYear").innerText = new Date().getFullYear();
});

document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua elemen tab dan panel
    const tabItems = document.querySelectorAll('.nhtsa-tab-item');
    const tabPanels = document.querySelectorAll('.nhtsa-tab-panel');

    // Tambahkan event listener ke setiap tab
    tabItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Hapus kelas "active" dari semua tab
            tabItems.forEach(function(tab) {
                tab.classList.remove('active');
            });
            // Tambahkan kelas "active" pada tab yang diklik
            this.classList.add('active');

            // Hapus kelas "active" dari semua panel
            tabPanels.forEach(function(panel) {
                panel.classList.remove('active');
            });

            // Dapatkan nama tab dari atribut data-tab
            const tabToShow = this.getAttribute('data-tab');
            // Temukan panel yang sesuai dengan id tersebut
            const activePanel = document.getElementById(tabToShow);
            if (activePanel) {
                activePanel.classList.add('active');
            }
        });
    });
});
