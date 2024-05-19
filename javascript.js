/***Javascript para la hoja de cálculo versión 2***/

//En primer lugar defino las variables

    //Máquina A
let reca1 = document.querySelector("#valorRecaudacion1");
let cargas1 = document.querySelector("#valorCargas1");
let efec1 = document.querySelector("#valorEfectivo1");
let ave1 = document.querySelector("#valorAverias1");

    //Máquina B
let reca2 = document.querySelector("#valorRecaudacion2");
let cargas2 = document.querySelector("#valorCargas2");
let efec2 = document.querySelector("#valorEfectivo2");
let ave2 = document.querySelector("#valorAverias2");

    //Máquina C
let reca3 = document.querySelector("#valorRecaudacion3");
let cargas3 = document.querySelector("#valorCargas3");
let efec3 = document.querySelector("#valorEfectivo3");
let ave3 = document.querySelector("#valorAverias3");

    //Variables comunes
let hopper = document.querySelector("#valorHopper");
let rec = document.querySelector("#valorRecarga");

//Aquí se capturan los datos

    //Máquina A
reca1.addEventListener("keydown", function() {});
cargas1.addEventListener("keydown", function() {});
efec1.addEventListener("keydown", function() {});
ave1.addEventListener("keydown", function() {});
    //Máquina B
reca2.addEventListener("keydown", function() {});
cargas2.addEventListener("keydown", function() {});
efec2.addEventListener("keydown", function() {});
ave2.addEventListener("keydown", function() {});
    //Máquina C
reca3.addEventListener("keydown", function() {});
cargas3.addEventListener("keydown", function() {});
efec3.addEventListener("keydown", function() {});
ave3.addEventListener("keydown", function() {});
    //Datos comunes
hopper.addEventListener("keydown", function() {});
rec.addEventListener("keydown", function() {});
    
//Esta es la función que realiza los cálculos

function auxiliar () {

    let recAuxiliar1 = (parseFloat(reca1.textContent) + parseFloat(cargas1.textContent) + parseFloat(hopper.textContent) - parseFloat(efec1.textContent) - parseFloat(ave1.textContent)).toFixed(1);
    let res1 = document.querySelector("#resultado1");
    let recAuxiliar2 = (parseFloat(reca2.textContent) + parseFloat(cargas2.textContent) + parseFloat(hopper.textContent) - parseFloat(efec2.textContent) - parseFloat(ave2.textContent)).toFixed(1);
    let res2 = document.querySelector("#resultado2");
    let recAuxiliar3 = (parseFloat(reca3.textContent) + parseFloat(cargas3.textContent) + parseFloat(hopper.textContent) - parseFloat(efec3.textContent) - parseFloat(ave3.textContent)).toFixed(1);
    let res3 = document.querySelector("#resultado3"); 
    let resultado = parseFloat(valorRecarga.textContent - recAuxiliar1 - recAuxiliar2 - recAuxiliar3).toFixed(1);
    let resGlobal = document.querySelector("#resGlobal");
    
    res1.textContent = recAuxiliar1 + " €";
    res2.textContent = recAuxiliar2 + " €";
    res3.textContent = recAuxiliar3 + " €";
    if (resultado == 0) {
        resGlobal.textContent = `La recarga auxiliar es correcta`;
        resGlobal.style.backgroundColor = "rgb(161, 148, 132)";
        resGlobal.style.fontWeight = 800;
    } else if (resultado >= 0) {
        resGlobal.textContent = `Sobran: ${resultado} € en la recarga auxiliar`;
        resGlobal.style.backgroundColor = "green";
        resGlobal.style.fontWeight = 800;
    } else if (resultado <= 0) {
        resGlobal.textContent = `Faltan: ${Math.abs(resultado)} € en la recarga auxiliar`;
        resGlobal.style.backgroundColor = "red";
        resGlobal.style.fontWeight = 800;
    }
};
function limpiar() {
    //let total = document.querySelector("#escribe");
    //total.textContent="v";
    let entradas = document.querySelectorAll(".derecha");
    for (i = 0; i <= (entradas.length) - 1; i++) {
        entradas[i].textContent = 0;
    };
    auxiliar();   
}