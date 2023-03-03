import { binaryCalculate, decimalCalculate, checkString } from "./binaryHelper.js";



const myForm = document.querySelector('#binaryForm');

const btnbinaryConverter = document.getElementById("btn-binaryConverter");


 
const insertbinary = document.querySelector("#binaryToConvert");

var finalResult = 0;



// script.js
//exchangeRateButton.addEventListener('click', () => {
btnbinaryConverter.addEventListener('click', async () => {

    //Moeda a Converter
    const selectElementConvertFrombinary = document.getElementById("convertFromBinaryType");
    const selectedOptionConvertFrombinary = selectElementConvertFrombinary.options[selectElementConvertFrombinary.selectedIndex];
    const selectedValueConvertFrombinary = selectedOptionConvertFrombinary.value;
    console.log(selectedValueConvertFrombinary);
    //var conversionFactor = defineConversionFactor(selectedValueConvertFrombinary);
    //console.log(conversionFactor);
  
    //Moeda pós-conversão
    const selectElementToConvertTo = document.getElementById("convertToDecimalType");
    const selectedOptionToConvertTo = selectElementToConvertTo.options[selectElementToConvertTo.selectedIndex];
    const selectedValueToConvertTo = selectedOptionToConvertTo.value;
    console.log(selectedValueToConvertTo);

    const valueInserted = document.getElementById("binaryToConvert").value;

    if(selectedValueConvertFrombinary == "fromBinary" && selectedValueToConvertTo == "toDecimal" ){
        
        console.log(valueInserted.toString().length);
        finalResult = binaryCalculate(valueInserted, valueInserted.toString().length, 1);
        console.log('finalResult is ' + finalResult);
 

    } else if(selectedValueConvertFrombinary == "fromBinary" && selectedValueToConvertTo == "toBinary" ) {
        finalResult = valueInserted;
    }

    if (selectedValueConvertFrombinary == "fromDecimal" && selectedValueToConvertTo == "toBinary"){
       
        console.log(valueInserted);
        
        finalResult = decimalCalculate(valueInserted);
        console.log('finalResult is ' + finalResult);
    }else if(selectedValueConvertFrombinary == "fromDecimal" && selectedValueToConvertTo == "toDecimal") {
        finalResult = valueInserted;
    }

    



    const resultadoElement = document.getElementById("binaryResult");
    resultadoElement.textContent = "";
    resultadoElement.textContent = Number(finalResult).toFixed(0);
});