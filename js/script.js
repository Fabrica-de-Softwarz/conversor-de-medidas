

import { getExchangeRate } from "./currencyHelper.js";

import { calculate } from "./currencyHelper.js";

const myForm = document.querySelector('#mainForm');

const btnConverter = document.getElementById("btn-converter");


 
  const valorInserido = document.querySelector("#valueToConvert");
  



// script.js
//exchangeRateButton.addEventListener('click', () => {
btnConverter.addEventListener('click', async () => {

    //Moeda a Converter
    const selectElementConvertFromValue = document.getElementById("convertFromValueType");
    const selectedOptionConvertFromValue = selectElementConvertFromValue.options[selectElementConvertFromValue.selectedIndex];
    const selectedValueConvertFromValue = selectedOptionConvertFromValue.value;
    console.log(selectedValueConvertFromValue);
  
    //Moeda pós-conversão
    const selectElementToConvertTo = document.getElementById("convertToValueType");
    const selectedOptionToConvertTo = selectElementToConvertTo.options[selectElementToConvertTo.selectedIndex];
    const selectedValueToConvertTo = selectedOptionToConvertTo.value;
    console.log(selectedValueToConvertTo);


    const valueInserted = document.getElementById("valueToConvert").value;
    console.log(valueInserted);

    const appId = 'fc25242735d34e3da284c78de0776e75';
    const resultadoElement = document.getElementById("resultado");

    const payload = {input: 'Datetime', number1: '11', number2: '20'};

    //const result = await calculate(payload);

    //console.log(result);


    
/*
  // Usage:
  getExchangeRate("https://openexchangerates.org/api", appId)  
    .then(rate => {
        console.log(parseFloat(valorInseridoFloat))
        const formattedRate = rate
        resultadoElement.textContent = "USD to BRL value is " + 3 * formattedRate;
    })  
    .catch(error => console.log(`Error: ${error}`));
*/
  });

   
