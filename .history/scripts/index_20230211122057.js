let unit = document.getElementsByName('unidade');
let  resUnit = document.getElementsByName('res-unidades');
let res = document.getElementById('res');
let submit = document.getElementById('submit')

function calcTemp(unit, resUnit){ // Cálculo de celsius para fahreinheit 
         let celsius = document.getElementById('celsius')
        let fahrenheit = document.getElementById('fah-res')
        let graus = document.getElementById('graus')
        graus = Number(graus.value)
        let numCelsius = Number(celsius.value)
        let numFah = Number(fahrenheit.value)
        let result = (1.8 * graus) + 32;

       res.innerHTML = `${graus} Celsius em Fahrenheit é ${result}`}



submit.addEventListener('click', event =>{
 
 if(unit[0].checked == true && resUnit.checked[2] == true){
 calcTemp()} else{
    alert('Deu certo carai')
 }
})


