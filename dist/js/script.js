const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active")
})

closeElem.addEventListener("click", () => {
    menu.classList.remove("active")
})

const counters = document.querySelectorAll(".progress__item-perce"),
    lines = document.querySelectorAll(".progress__item-devider-perce")



counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})