document.addEventListener("DOMContentLoaded", () => {

    /* ================= NAV: link activo ================= */
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    /* ================= APARICIÓN SUAVE AL SCROLL ================= */
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.15
    });

    sections.forEach(section => observer.observe(section));

    /* ================= MODELOS: FEEDBACK MODERNO ================= */
    const models = document.querySelectorAll(".model");

    models.forEach(model => {
        model.addEventListener("mouseenter", () => {
            model.style.borderColor = "rgba(139, 156, 255, 0.6)";
        });

        model.addEventListener("mouseleave", () => {
            model.style.borderColor = "rgba(255, 255, 255, 0.07)";
        });
    });

});
