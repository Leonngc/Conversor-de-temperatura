let unit = document.getElementsByName('unidade');
let  resUnit = document.getElementsByName('res-unidades');
let result = document.getElementById('res');
let submit = document.getElementById('submit')

function cefah(unit, resUnit){ // Cálculo de celsius para fahreinheit 
        let celsius = document.getElementById('celsius')
        let fahrenheit = document.getElementById('fah-res')
        let graus = document.getElementById('graus')
        graus = Number(graus.value)
        let numCelsius = Number(celsius.value)
        let numFah = Number(fahrenheit.value)
        let result = (1.8 * graus) + 32;
       result.innerHTML = `${gra}`



submit.addEventListener('click', event =>{
 
 
 cefah()
})


