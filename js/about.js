"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".timeline li");
    const intro = document.querySelector("#first_text_home")

    function callback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    }

    const observer = new IntersectionObserver(callback, {threshold: 0.1});

    observer.observe(intro);
    items.forEach(item => observer.observe(item));
});
