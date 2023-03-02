import { defineConversionFactor } from "./distanceHelper.js";
import { defineConversionResultFactor } from "./distanceHelper.js";

const myForm = document.querySelector('#distForm');

const btnDistConverter = document.getElementById("btn-distConverter");


 
  const insertDistance = document.querySelector("#distToConvert");




// script.js
//exchangeRateButton.addEventListener('click', () => {
btnDistConverter.addEventListener('click', async () => {

    //Moeda a Converter
    const selectElementConvertFromDist = document.getElementById("convertFromDistType");
    const selectedOptionConvertFromDist = selectElementConvertFromDist.options[selectElementConvertFromDist.selectedIndex];
    const selectedValueConvertFromDist = selectedOptionConvertFromDist.value;
    console.log(selectedValueConvertFromDist);
    var conversionFactor = defineConversionFactor(selectedValueConvertFromDist);
    console.log(conversionFactor);
  
    //Moeda pós-conversão
    const selectElementToConvertTo = document.getElementById("convertToDistType");
    const selectedOptionToConvertTo = selectElementToConvertTo.options[selectElementToConvertTo.selectedIndex];
    const selectedValueToConvertTo = selectedOptionToConvertTo.value;
    console.log(selectedValueToConvertTo);
    var conversionResultFactor = defineConversionResultFactor(selectedValueToConvertTo);
    console.log(conversionResultFactor);


    const valueInserted = document.getElementById("distToConvert").value;
    var finalResult = valueInserted * conversionFactor / conversionResultFactor;
    console.log(finalResult);
});