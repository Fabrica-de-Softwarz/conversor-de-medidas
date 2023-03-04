import { defineConversionFactor } from "./distanceHelper.js";
import { defineConversionResultFactor } from "./distanceHelper.js";

//first unit type
var firstDistUnitTypeElement = document.getElementById("imperialUnitTypeGroup");
var selectedOptionFirstDistUnitType = firstDistUnitTypeElement.options[firstDistUnitTypeElement.selectedIndex];
var firstDistUnitType = selectedOptionFirstDistUnitType.value;

//second unit type
var secondDistUnitTypeElement = document.getElementById("metricUnitTypeGroup");
var selectedOptionSecondDistUnitType = secondDistUnitTypeElement.options[secondDistUnitTypeElement.selectedIndex];
var secondDistUnitType = selectedOptionSecondDistUnitType.value;

const btnDistConverter = document.getElementById("btn-distConverter");

firstDistUnitTypeElement.addEventListener('change', (event) => {
  selectedOptionFirstDistUnitType = firstDistUnitTypeElement.options[firstDistUnitTypeElement.selectedIndex];
  firstDistUnitType = selectedOptionFirstDistUnitType.value;
  console.log(firstDistUnitType);
});

secondDistUnitTypeElement.addEventListener('change', (event) => {
  selectedOptionSecondDistUnitType = secondDistUnitTypeElement.options[secondDistUnitTypeElement.selectedIndex];
  secondDistUnitType = selectedOptionSecondDistUnitType.value;
  console.log(secondDistUnitType);
});

btnDistConverter.addEventListener('click', async () => {

    console.log(firstDistUnitType + " to " + secondDistUnitType);
    var conversionFactor = defineConversionFactor(firstDistUnitType);
    console.log(conversionFactor);
  
    var conversionResultFactor = defineConversionResultFactor(secondDistUnitType);
    console.log(conversionResultFactor);


    const valueInserted = document.getElementById("distToConvert").value;
    var finalResult = valueInserted * conversionFactor / conversionResultFactor;
    var swapResult = (valueInserted * conversionResultFactor) / conversionFactor;
    console.log(finalResult);

    const resultadoElement = document.getElementById("distResult");
    resultadoElement.textContent = finalResult.toFixed(2) + " " + secondDistUnitType +"s \t ou \r\n" +'\n'+ swapResult.toFixed(2) + " " + firstDistUnitType + "s";
});