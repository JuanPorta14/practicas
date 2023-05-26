const display = document.querySelector(".count");
const plus = document.querySelector(".plus");
const reset = document.querySelector(".reset");

let cuenta = 0;

plus.addEventListener("click",() => {
    cuenta++;
    display.innerHTML = cuenta;
});

reset.addEventListener("click",() => {
    cuenta = 0;
    display.innerHTML = cuenta;
});

