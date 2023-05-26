class Worker{
    constructor(name,img,description,job){
        this.nombre = name;
        this.descripcion = description;
        this.trabajo = job;
        this.imagen = img;
    }
}

const flechaIzq = document.querySelector(".izq");
const flechaDer = document.querySelector(".der");
const btn = document.querySelector(".random");
const img = document.querySelector(".imagen");
const names = document.querySelector(".name");
const job = document.querySelector(".job");
const description = document.querySelector(".description");

let workers  = [];
let indice = 1;

const trabajador1 = new Worker("Olivia Roberts",imagen = "img/image1.jpg",descripcion = "Highly skilled in data storage and processing. Expert in Hadoop, Spark, and SQL.", trabajo = "Data Engineer");
const trabajador2 = new Worker("Sophia Mitchell","img/image2.jpg","Analytical problem-solver skilled in identifying and resolving complex technical issues.","Systems Analyst");
const trabajador3 = new Worker("Benjamin Anderson","img/image3.jpg","Talented developer skilled in multiple languages. Meticulous and collaborative problem-solver.","Software Developer");
const trabajador4 = new Worker("William Thompson","img/image4.jpg","Proficient in HTML, CSS, and JavaScript. Creative problem-solver with an eye for design.","Web Developer");
const trabajador5 = new Worker("Henry Johnson","img/image5.jpg","Experienced in designing and implementing efficient applications. Adaptable and detail-oriented.","Software Engineer");
workers.push(trabajador1,trabajador2,trabajador3,trabajador4,trabajador5);

window.addEventListener("load" ,() => {
    changeInformation(workers[indice]);
});

flechaIzq.addEventListener("click",() => {
    if(indice === 0){
        indice = workers.length - 1;
    }else{
        indice--;
    }
    changeInformation(workers[indice]);
    
});

flechaDer.addEventListener("click",() => {
    if(indice === workers.length - 1){
        indice = 0;
    }else{
        indice++;
    }
    changeInformation(workers[indice]);
    
});

function changeInformation(obj){
    names.innerHTML = obj.nombre;
    img.setAttribute("src", obj.imagen);
    job.innerHTML = obj.trabajo;
    description.innerHTML = obj.descripcion;
}



