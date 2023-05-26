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

let nombres = ["Olivia Roberts","Sophia Mitchell","Benjamin Anderson","William Thompson","Henry Johnson"];
let descripciones = [
    "Highly skilled in data storage and processing. Expert in Hadoop, Spark, and SQL.",
    "Analytical problem-solver skilled in  identifying and resolving complex technical issues.",
    "Talented developer skilled in multiple languages. Meticulous and collaborative problem-solver.",
    "Proficient in HTML, CSS, and JavaScript. Creative problem-solver with an eye for design.",
    "Experienced in designing and implementing efficient applications. Adaptable and detail-oriented."
];
let trabajos = ["Data Engineer","Systems Analyst","Software Developer","Web Developer","Software Engineer"]; 
let imagenes = ["img/image1.jpg","img/image2.jpg","img/image3.jpg","img/image4.jpg","img/image5.jpg"];
let workers  = [];
let indice = 0;


for (i in nombres){
    let trabajador = new Worker(nombres[i],imagenes[i],descripciones[i],trabajos[i]);
    workers.push(trabajador);
}

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

let c = 0

btn.addEventListener("click",() => {
    let i = Math.floor(Math.random() * (workers.length - 1));
    if (i == indice && indice < workers.length){
        i++;
    }
    else if (i == indice && indice > 0){
        indice++;
    }
    changeInformation(workers[i]);
});

function changeInformation(obj){
    names.innerHTML = obj.nombre;
    img.setAttribute("src", obj.imagen);
    job.innerHTML = obj.trabajo;
    description.innerHTML = obj.descripcion;
    indice = workers.indexOf(obj);
}



