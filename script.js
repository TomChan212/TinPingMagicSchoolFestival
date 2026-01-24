const percentageElement = document.getElementById('percentage');
const fallbackLink = document.getElementById('fallbackLink');
const loadingDuration = 2000; // 2 seconds for better effect
const targetURL = "https://hkcystingping.github.io/TinPingMagicSchoolFestival/";

let progress = 0;
const interval = 20; // Update every 20ms for smooth animation
const increment = 100 / (loadingDuration / interval);

// Show fallback link after 1 second
setTimeout(function() {
    if (fallbackLink && fallbackLink.parentElement) {
        fallbackLink.parentElement.style.opacity = '0.7';
    }
}, 1000);

const progressInterval = setInterval(function() {
    progress += increment;
    if (progress >= 100) {
        progress = 100;
        percentageElement.textContent = '100%';
        clearInterval(progressInterval);
        setTimeout(function() {
            window.location.href = targetURL;
        }, 200);
    } else {
        percentageElement.textContent = Math.floor(progress) + '%';
    }
}, interval);
