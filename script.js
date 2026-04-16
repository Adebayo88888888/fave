// Target Date: April 20, 2026 (00:00:00)
const birthday = new Date(2026, 3, 20, 0, 0, 0).getTime();

const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = birthday - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the countdown is finished, reveal the site
    if (distance < 0) {
        clearInterval(countdown);
        revealBirthday();
    }
}, 1000);

function revealBirthday() {
    document.getElementById("countdown-screen").style.display = "none";
    document.getElementById("birthday-content").classList.remove("hidden");

    // Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ffffff']
    });
}

function toggleMusic() {
    const music = document.getElementById("bday-music");
    const btn = document.getElementById("music-toggle");
    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸ Pause Vibes";
    } else {
        music.pause();
        btn.innerHTML = "🎵 Play Vibes";
    }
}

// To test right now, uncomment the line below:
// revealBirthday();