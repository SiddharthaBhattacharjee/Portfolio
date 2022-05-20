var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            let active = document.querySelectorAll(".accordion-div .accordion.active");
            for (let j = 0; j < active.length; j++) {
                active[j].classList.remove("active");
                active[j].nextElementSibling.style.maxHeight = null;
            }
            this.classList.toggle("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}