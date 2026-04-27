// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Animate counters
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current).toLocaleString();
            }
        }, 20);
    });
}

// Animate progress bars
function animateProgress() {
    const progresses = document.querySelectorAll('.progress');
    progresses.forEach(progress => {
        const width = progress.getAttribute('data-width');
        progress.style.width = width;
    });
}

// Alert
function showAlert() {
    alert('Thank you for pledging! 🌍 Together, we can save the planet. #EcoGuard');
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stats')) {
                animateCounters();
            } else if (entry.target.classList.contains('resources')) {
                animateProgress();
            }
        }
    });
});

document.querySelector('.stats').observe(observer);
document.querySelector('.resources').observe(observer);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('header');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(17,153,142,0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'linear-gradient(135deg, #11998e, #38ef7d)';
        nav.style.backdropFilter = 'none';
    }
});