let unit = document.getElementsByClassName('unidades');
let  resUnit = document.getElementsByClassName('res-unidades');
let result = document.getElementById('res');
let submit = document.getElementById('submit')

submit.addEventListener('click', event =>{
    function cefah(unit, resUnit){ // Cálculo de celsius para fahreinheit 
        let celsius = document.getElementById('celsius').value
        let fahrenheit = document.getElementById('fah-res').value
        let graus = document.getElementById('graus').value
        let numCelsius = Number(celsius.value)
        let numFah = Number(fahrenheit.value)
        alert(`${numCelsius}`)
        return
    }

    cefah(unit, resUnit)
})
