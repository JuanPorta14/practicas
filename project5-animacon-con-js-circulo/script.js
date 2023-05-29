const menu = document.querySelector('.menu');
const tocar = document.querySelector('.acomodar');

tocar.addEventListener("click", () => {
    if (menu.classList.contains("animation")){
        menu.classList.remove("animation");
    }else{
        menu.classList.add("animation");
    }
})