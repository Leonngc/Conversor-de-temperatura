let unit = document.getElementsByName('unidade');
let  resUnit = document.getElementsByName('res-unidade');
let res = document.getElementById('res');
let submit = document.getElementById('submit')

function calcTemp(){ 
    // Cálculo de celsius para fahrenheit 
        if(unit[0].checked && resUnit[2].checked){
        let graus = document.getElementById('graus')
        graus = Number(graus.value)
        let result = (1.8 * graus) + 32;
       res.innerHTML = `${graus} Celsius em Fahrenheit é ${result}`
    }
            //Fahrenheit para Celsius
       else if(unit[2].checked && resUnit[0].checked){
        let graus = document.getElementById('graus');
         graus = Number(graus.value)
          const resultInt = (graus - 32) / 1.8;
            if(Number.isInteger(resultInt) == true){
                res.innerHTML = `${graus} Fahrenheit em Celsius é ${resultInt}°C`
         }else if(Number.isInteger(resultInt) == false){
            res.innerHTML = `${graus} Fahrenheit em Celsius é ${resultInt.toPrecision(5)}°C`
        }

        //Celsius para kelvin
       } else if(unit[0].checked && resUnit[1].checked){
        let res = document.getElementById('res')
        let graus = document.getElementById('graus')
        graus = Number(graus.value)
        let result = graus + 273
        res.innerHTML = `${graus} Celsius em Kelvin é ${result}`
       } 
       //Kelvin para Celsius
       else if(unit[1].checked && resUnit[0].checked){
        let graus = document.getElementById('graus')
        graus = Number(graus.value)
        let result = graus - 273
        res.innerHTML = `${graus} Kelvin em Celsius é ${result}°C`
       } 
       // Kelvin para Fahrenheit
       else if(unit[1].checked && resUnit[2].checked){
        let graus = document.getElementById('graus')
        graus = Number(graus.value)
        const result= (graus - 273.15) * (9/5) + 32;

        if(Number.isInteger(result) == true){
        res.innerHTML = `${graus} Fahrenheit em Kelvin é ${resulti.toPrecision(2)} `
    } 
        else if(Number.isInteger(resulti) == false){
            res.innerHTML = `${graus} Fahrenheit em Kelvin é ${resulti.toPrecision(6)} `
        }
       } 
       //Fahrenheit para Kelvin
       else if(unit[2].checked && resUnit[1].checked){
        let graus = document.getElementById('graus')
        graus = Number(graus.value)
        let result = (graus - 32) * 5/9 + 273.15;
        if(Number.isInteger(result) == true){
        res.innerHTML = `${graus} Fahrenheit em Kelvin é ${result}`
       }else if(Number.isInteger(result) == false){
        res.innerHTML = `${graus} Fahrenheit em Kelvin é ${result.toPrecision(6)}`
       }
    }


}
submit.addEventListener('click', event =>{
    calcTemp();
})
