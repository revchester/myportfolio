function openTab(evt, imgId) {
    // Sembunyikan semua tab konten
    let tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Hilangkan class 'active' dari semua tab-link
    let tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Tampilkan tab yang diklik dan tambahkan class 'active' pada tab tersebut
    document.getElementById(imgId).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Zoom functionality
document.addEventListener('DOMContentLoaded', function () {
    let zoomableImages = document.querySelectorAll('.zoomable');
    
    zoomableImages.forEach(img => {
        let isZoomedIn = false; // Track zoom state
        
        img.addEventListener('click', function (event) {
            if (!isZoomedIn) {
                // Get click position relative to the image
                let rect = img.getBoundingClientRect();
                let x = event.clientX - rect.left; // X position of click relative to image
                let y = event.clientY - rect.top;  // Y position of click relative to image
                
                // Calculate percentage of the click position relative to image size
                let xPercent = (x / img.offsetWidth) * 100;
                let yPercent = (y / img.offsetHeight) * 100;
                
                // Set transform-origin based on the click position
                img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
                
                // Apply zoom-in transformation
                img.style.transform = "scale(2)"; // 2x zoom
                img.classList.add('zoom-in');
                isZoomedIn = true;
            } else {
                // Reset zoom
                img.style.transform = "scale(1)";
                img.classList.remove('zoom-in');
                isZoomedIn = false;
            }
        });
    });
});
