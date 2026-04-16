// 1. SET THE DATE (April 20, 2026)
const birthday = new Date(2026, 3, 20, 0, 0, 0).getTime();

const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthday - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${d}d ${h}h ${m}m ${s}s`;

    if (distance < 0) {
        clearInterval(countdownTimer);
        revealBirthday();
    }
}, 1000);

// 2. REVEAL THE MAGIC
function revealBirthday() {
    document.getElementById("countdown-screen").style.display = "none";
    document.getElementById("birthday-content").classList.remove("hidden");

    // Initial Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ffffff']
    });
}

// 3. REASON GENERATOR LOGIC
const reasons = [
    "Your laugh is my absolute favorite sound in the world.",
    "The way you handle challenges with so much grace and strength.",
    "Your deep love for murder mysteries—it's so uniquely you.",
    "How you make 500 miles feel like nothing when we talk.",
    "The way you support my dreams without hesitation.",
    "You have the kindest heart I've ever known.",
    "The way your eyes sparkle when you're genuinely happy.",
    "You're my constant in a world full of variables.",
    "I love how I can be 100% myself around you.",
    "Because you're you—and that's more than enough for me."
];

function generateReason() {
    const textElement = document.getElementById("reason-text");
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    textElement.style.opacity = 0;

    setTimeout(() => {
        textElement.innerHTML = randomReason;
        textElement.style.opacity = 1;
        confetti({
            particleCount: 40,
            scalar: 0.8,
            shapes: ['heart'],
            colors: ['#ff69b4']
        });
    }, 300);
}

// 4. MUSIC TOGGLE
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

// 5. SCROLL FADE-IN EFFECT
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});

revealBirthday(); 