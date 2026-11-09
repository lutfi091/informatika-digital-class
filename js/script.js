document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function () {
            nav.classList.toggle("show");

            const isOpen = nav.classList.contains("show");
            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Tutup menu" : "Buka menu"
            );
            menuToggle.textContent = isOpen ? "✕" : "☰";
        });
    }
});
