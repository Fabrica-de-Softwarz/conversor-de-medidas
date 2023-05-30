

import { assignSymbols, getCurrencyRateDate, getCurrencyRates } from "./currencyHelper.js";

const btnConverter = document.getElementById("btn-currencyConverter");



var firstCurrencyElement = document.getElementById("convertFromValueType");
var selectedOptionFirstCurrency = firstCurrencyElement.options[firstCurrencyElement.selectedIndex];
var firstCurrencyTypeValue = selectedOptionFirstCurrency.value;
  
var secondCurrencyElement = document.getElementById("convertToValueType");
var selectedOptionSecondCurrency = secondCurrencyElement.options[secondCurrencyElement.selectedIndex];
var secondCurrencyTypeValue = selectedOptionSecondCurrency.value;
var firstSymbol = "";
var secondSymbol = "";
var result = 0;


firstCurrencyElement.addEventListener('change', (event) => {
  selectedOptionFirstCurrency = firstCurrencyElement.options[firstCurrencyElement.selectedIndex];
  firstCurrencyTypeValue = selectedOptionFirstCurrency.value;
  console.log(firstCurrencyTypeValue);
  firstSymbol = assignSymbols(firstCurrencyTypeValue);
});

secondCurrencyElement.addEventListener('change', (event) => {
  selectedOptionSecondCurrency = secondCurrencyElement.options[secondCurrencyElement.selectedIndex];
  secondCurrencyTypeValue = selectedOptionSecondCurrency.value;
  console.log(secondCurrencyTypeValue);
  secondSymbol = assignSymbols(secondCurrencyTypeValue);
});


btnConverter.addEventListener('click', async () => {

    let changeEvent = new Event('change');
    firstCurrencyElement.dispatchEvent(changeEvent);
    secondCurrencyElement.dispatchEvent(changeEvent);

    const valueInserted = document.getElementById("valueToConvert").value;
    console.log(valueInserted);

    //how to call a anonymous function inside a function; (() => {})();
    (async () => {
      /*
      const rates = await getCurrencyRates();
      const exchangeRateBRL = rates.BRL;
      const exchangeRateEUR = rates.EUR;*/
      
        const usdRate = await getCurrencyRateDate("USD");
        const eurRate = await getCurrencyRateDate("EUR");
        console.log("USD: " + usdRate + " | " + "EUR: " + eurRate);
      

        
      
      if (firstSymbol == secondSymbol){
        result = valueInserted;
      }else if (firstSymbol == 'USD' && secondSymbol == 'BRL'){
        result = valueInserted / usdRate
  
      } else if (firstSymbol == 'BRL' && secondSymbol == 'USD') {
        result = valueInserted * usdRate
  
      } else if (firstSymbol == 'USD' && secondSymbol == 'EUR') {
        result = valueInserted * (usdRate / eurRate)
  
      } else if (firstSymbol == 'EUR' && secondSymbol == 'USD') {
        result = valueInserted * (eurRate / usdRate)
  
      } else if (firstSymbol == 'BRL' && secondSymbol == 'EUR') {
        result = (valueInserted * eurRate)
  
      } else if (firstSymbol == 'EUR'  && secondSymbol == 'BRL') {
        result = (valueInserted / eurRate)
      }
      
      
      console.log(result);
      const resultadoElement = document.getElementById("currencyResult");   
      resultadoElement.textContent = Number(result).toFixed(2); 
    })();
   

  });

   
