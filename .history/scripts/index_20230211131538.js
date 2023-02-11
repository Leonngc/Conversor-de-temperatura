let unit = document.getElementsByName('unidade');
let  resUnit = document.getElementsByName('res-unidade');
let res = document.getElementById('res');
let submit = document.getElementById('submit')

function calcTemp(){ 
    // Cálculo de celsius para fahreinheit 
        if(unit[0].checked && resUnit[2].checked){

        let celsius = document.getElementById('celsius')
        let fahrenheit = document.getElementById('fah-res')
        let graus = document.getElementById('graus')
        graus = Number(graus.value)
        let numCelsius = Number(celsius.value)
        let numFah = Number(fahrenheit.value)
        let result = (1.8 * graus) + 32;
       res.innerHTML = `${graus} Celsius em Fahrenheit é ${result}`}

       else if(unit[2].checked && resUnit[0]){
        let fahreinheit = document.getElementById('fahrenheit');
        let celsius = document.getElementById('cel-res');
        let graus = document.getElementById('graus');
        graus = Number(graus.value)
         let result = (graus - 32) / 1.8;
        if(result %= 0){
            
        }
       }}



submit.addEventListener('click', event =>{
    calcTemp();
})


