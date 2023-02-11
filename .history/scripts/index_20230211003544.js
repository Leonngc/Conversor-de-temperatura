let unit = document.getElementsByClassName('unidades');
let  resUnit = document.getElementsByClassName('res-unidades');
let result = document.getElementById('res');
let submit = document.getElementById('submit')

submit.addEventListener('click', event =>{
    function cefah(unit, resUnit){ // Cálculo de celsius para fahreinheit 
        let celsius = document.getElementById('celsius')
        let fahrenheit = document.getElementById('fah-res')
        let graus = document.getElementById('graus')
        graus = Number(graus.value)
        let numCelsius = Number(celsius.value)
        let numFah = Number(fahrenheit.value)
        let result = (1.8 * graus) + 32;
        alert(`${result}`)
        return
    }
 
    
})

if(unit.checked[0] = true && resUnit.checked[2] == true){
    alert('celsius para fah')
    cefah(unit, resUnit)
 }
