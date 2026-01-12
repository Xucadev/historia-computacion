document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".context, .machine, .characteristics, .transition"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(el => observer.observe(el));

});
