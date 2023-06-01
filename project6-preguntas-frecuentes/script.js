const input = document.querySelectorAll('.input');

input.forEach((element) => {
    element.addEventListener("click", (event) => {
        console.log(event.currentTarget);
    });
});