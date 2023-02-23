

import { getExchangeRate } from "./helper.js";

const btnConverter = document.getElementById("btn-converter");

// script.js
//exchangeRateButton.addEventListener('click', () => {
btnConverter.addEventListener('click', () => {


    const appId = 'fc25242735d34e3da284c78de0776e75';
    const resultadoElement = document.getElementById("resultado");
    const valorInserido = document.querySelector("valueToConvert");
    

  // Usage:
  getExchangeRate("https://openexchangerates.org/api", appId)  
    .then(rate => {
        console.log(valorInserido * 2)
        const formattedRate = rate
        resultadoElement.textContent = "USD to BRL value is " + 3 * formattedRate;
    })  
    .catch(error => console.log(`Error: ${error}`));

  });

  




