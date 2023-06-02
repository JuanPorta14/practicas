const plus = document.querySelectorAll('.plus');
const question = document.querySelectorAll('.visible');



plus.forEach((element) => {
    element.addEventListener('click', (e) => {
        question.forEach((elem) => {
            
            if (elem.classList.contains("animacion") && elem !== element.parentElement) { 
                elem.classList.remove("animacion");
                
            }
        });

        plus.forEach((elem) => {
            if (elem.classList.contains("plus-cruzado") && elem !== element) {
                elem.classList.remove("plus-cruzado");
            }
        });
        element.parentElement.classList.toggle("animacion");
        element.classList.toggle("plus-cruzado");
    })

    
});

console.log(question);

