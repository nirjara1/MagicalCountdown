// Set the date and time of the gift arrival
// Format: "Month Day, Year HH:MM:SS"
const giftDate = new Date("August 10, 2025 00:00:00").getTime();

// Get the HTML elements for the countdown
const titleEl = document.getElementById("title");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const revealMessage = document.getElementById("reveal-message");
const countdownTimer = document.getElementById("countdown-timer");
const dayOfCelebrationEl = document.getElementById("day-of-celebration");

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the gift date
    const distance = giftDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the corresponding elements
    daysEl.innerHTML = days < 10 ? `0${days}` : days;
    hoursEl.innerHTML = hours < 10 ? `0${hours}` : hours;
    minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    
    if (days > 0) {
        titleEl.innerHTML = "Your Magical Gift is on its way!";
    }
    
    else {
        titleEl.innerHTML = "Your gifts are here!";
        dayOfCelebrationEl.classList.add("active");
    }

    
    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownTimer.style.display = "none";
        titleEl.style.display = "none"; 
        revealMessage.classList.add("active");
    }
}, 1000);