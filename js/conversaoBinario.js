

const myForm = document.querySelector('#binaryForm');

const btnbinaryConverter = document.getElementById("btn-binaryConverter");


 
  const insertbinaryance = document.querySelector("#binaryToConvert");




// script.js
//exchangeRateButton.addEventListener('click', () => {
btnbinaryConverter.addEventListener('click', async () => {

    //Moeda a Converter
    const selectElementConvertFrombinary = document.getElementById("convertFromBinaryType");
    console.log(selectElementConvertFrombinary.value);
    const selectedOptionConvertFrombinary = selectElementConvertFrombinary.options[selectElementConvertFrombinary.selectedIndex];
    const selectedValueConvertFrombinary = selectedOptionConvertFrombinary.value;
    console.log(selectedValueConvertFrombinary);
    var conversionFactor = defineConversionFactor(selectedValueConvertFrombinary);
    console.log(conversionFactor);
  
    //Moeda pós-conversão
    const selectElementToConvertTo = document.getElementById("convertToDecimalType");
    const selectedOptionToConvertTo = selectElementToConvertTo.options[selectElementToConvertTo.selectedIndex];
    const selectedValueToConvertTo = selectedOptionToConvertTo.value;
    console.log(selectedValueToConvertTo);
    var conversionResultFactor = defineConversionResultFactor(selectedValueToConvertTo);
    console.log(conversionResultFactor);


    const valueInserted = document.getElementById("binaryToConvert").value;
    var finalResult = valueInserted * conversionFactor;
    console.log(finalResult);

    const resultadoElement = document.getElementById("distResult");
    resultadoElement.textContent = finalResult.toFixed(2);
});