const display = document.querySelector(".count");
const plus = document.querySelector(".plus");
const reset = document.querySelector(".reset");
const rest = document.querySelector(".rest");
const botones = document.querySelectorAll(".btns");

let cuenta = 0;
display.style.color = "#881";


plus.addEventListener("click",() => {
    cuenta++;
    display.innerHTML = cuenta;
    if (cuenta > 0){
        display.style.color = "#181";
    }else if (cuenta == 0){
        display.style.color = "#881";
    }
});

reset.addEventListener("click",() => {
    cuenta = 0;
    display.innerHTML = cuenta;
    display.style.color = "#881"
});
rest.addEventListener("click",() => {
    cuenta--;
    display.innerHTML = cuenta;
    if (cuenta < 0){
        display.style.color = "#811";
    }else if (cuenta == 0){
        display.style.color = "#881";
    }
})

