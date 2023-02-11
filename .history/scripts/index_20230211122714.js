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
       res.innerHTML = `${graus} Celsius em Fahrenheit é ${result}`}else if(unit[1].checked && resUnit){
        alert("Deu  certo carai")
       }}



submit.addEventListener('click', event =>{
    calcTemp();
})


