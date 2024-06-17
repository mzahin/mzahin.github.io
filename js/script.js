// script.js
document.addEventListener("DOMContentLoaded", function() {
    var coll = document.querySelectorAll(".collapsible");
    var content = document.querySelectorAll(".content");

    coll.forEach((collapsible, index) => {
        collapsible.addEventListener("click", function() {
            // Collapse all content sections
            content.forEach((section, idx) => {
                if (idx !== index) {
                    section.classList.remove("show");
                }
            });
            // Toggle the clicked section
            content[index].classList.toggle("show");
        });
    });
});
