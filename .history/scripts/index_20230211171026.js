let unit = document.getElementsByName('unidade');
let  resUnit = document.getElementsByName('res-unidade');

let res = document.getElementById('res');
let submit = document.getElementById('submit')

function calcTemp(){ 
    // Cálculo de celsius para fahreinheit 
        if(unit[0].checked && resUnit[2].checked){
        let graus = document.getElementById('graus')
        graus = Number(graus.value)
        let result = (1.8 * graus) + 32;
       res.innerHTML = `${graus} Celsius em Fahrenheit é ${result}`}
            //Fahrenheit para Celsius
       else if(unit[2].checked && resUnit[0]){
        let fahreinheit = document.getElementById('fahrenheit');
        let celsius = document.getElementById('cel-res');
        let graus = document.getElementById('graus');
        graus = Number(graus.value)
          const result = (graus - 32) / 1.8;

            if(Number.isInteger(result) == true){
                res.innerHTML = `${graus} Fahrenheit em Celsius é ${result}°C`
         }else if(Number.isInteger(result) == false){
            res.innerHTML = `${graus} Fahrenheit em Celsius é ${result.toPrecision(5)}°C`
        }

        //Celsius para kelvin
       } else if(unit[0].checked && resUnit[1].checked){
        let res = document.getElementById('res')
        let result = Number(graus.value) + 273
        res.innerHTML = `${graus.value} Celsius em Kelvin é ${result}`
       } 
       //Kelvin para Celsius
       else if(unit[1].checked && resUnit[0].checked){
        let kelvin = document.getElementById('kelvin')
        let celsius = document.getElementById('cel-res')
        let graus = document.getElementById('graus')
        graus = Number(graus.value)
        let result = graus - 273
        res.innerHTML = `${graus} Kelvin em Celsius é ${result}°C`
       } else if(unit[2].checked && resUnit[1].checked){
        let graus = document.getElementById('graus')
        graus = Number(graus.value)
        let result = (graus + 459.67) * 5/9;
        res.innerHTML = `${graus} Fahrenheit em Kelvin é ${result} `
       }


}
submit.addEventListener('click', event =>{
    calcTemp();
})