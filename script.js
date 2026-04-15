// Target: April 20, 2026. Note: Month 3 is April.
const bday = new Date(2026, 3, 20, 0, 0, 0).getTime();

const timerUpdate = setInterval(() => {
    const now = new Date().getTime();
    const diff = bday - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${d}d ${h}h ${m}m ${s}s`;

    if (diff <= 0) {
        clearInterval(timerUpdate);
        reveal();
    }
}, 1000);

function reveal() {
    document.getElementById("countdown-screen").style.display = "none";
    document.getElementById("birthday-content").classList.remove("hidden");

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

// TEST: Uncomment to see content immediately
reveal();