const bars = document.querySelector(".logo");
const sideBar = document.querySelector(".side-bar");

bars.addEventListener("click", () => {
    sideBar.classList.toggle("animacion");
});