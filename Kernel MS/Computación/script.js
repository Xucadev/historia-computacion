
document.addEventListener("DOMContentLoaded", () => {

    /* ================= NAV: estado activo ================= */
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    /* ================= REVELADO SUAVE AL SCROLL ================= */
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.12
    });

    sections.forEach(section => observer.observe(section));

    /* ================= EFECTO SUTIL EN CARDS ================= */
    const cards = document.querySelectorAll(".timeline-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.borderColor = "rgba(122, 162, 255, 0.6)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.borderColor = "rgba(255, 255, 255, 0.08)";
        });
    });

});
