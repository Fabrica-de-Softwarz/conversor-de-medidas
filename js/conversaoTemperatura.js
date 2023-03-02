import { defineTempConversionFactor } from "./temperatureHelper.js";


const myForm = document.querySelector('#tempForm');

const btnTempConverter = document.getElementById("btn-TempConverter");



btnTempConverter.addEventListener('click', async () => {

    //Temperatura a Converter
    const selectElementConvertFromTemp = document.getElementById("convertFromTempType");
    const selectedOptionConvertFromTemp = selectElementConvertFromTemp.options[selectElementConvertFromTemp.selectedIndex];
    const selectedValueConvertFromTemp = selectedOptionConvertFromTemp.value;
    console.log(selectedValueConvertFromTemp);

  
    //Moeda pós-conversão
    /*
    const selectElementToConvertTo = document.getElementById("convertToTempType");
    const selectedOptionToConvertTo = selectElementToConvertTo.options[selectElementToConvertTo.selectedIndex];
    const selectedValueToConvertTo = selectedOptionToConvertTo.value;
    console.log(selectedValueToConvertTo);
    var conversionResultFactor = defineTempConversionResultFactor(selectedValueToConvertTo);
    console.log(conversionResultFactor);
    */

    const valueInserted = document.getElementById("tempToConvert").value;
    var finalResult = defineTempConversionFactor(selectedValueConvertFromTemp, valueInserted);
    console.log(finalResult);

    const resultadoElement = document.getElementById("tempResult");
    resultadoElement.textContent = finalResult.toFixed(2);
});