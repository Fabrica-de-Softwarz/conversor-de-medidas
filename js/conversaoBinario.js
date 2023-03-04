import { binaryCalculate, decimalCalculate, checkString } from "./binaryHelper.js";

const btnbinaryConverter = document.getElementById("btn-binaryConverter");
const btnSwap = document.getElementById("btn-swap");
var firstUnitTypeField = document.getElementById("firstUnitType");
var secondUnitTypeField = document.getElementById("secondUnitType");
var selectedOptionFirstUnitType = firstUnitTypeField.options[firstUnitTypeField.selectedIndex];;
var typeFirstUnit = selectedOptionFirstUnitType.value;
var selectedOptionSecondUnitType = secondUnitTypeField.options[secondUnitTypeField.selectedIndex];
var typeSecondUnit = selectedOptionSecondUnitType.value;

console.log(firstUnitTypeField + " " + secondUnitTypeField)

var finalResult = 0;

firstUnitTypeField.addEventListener('change', (event) => {
    selectedOptionFirstUnitType = firstUnitTypeField.options[firstUnitTypeField.selectedIndex];
    typeFirstUnit = selectedOptionFirstUnitType.value;
    console.log(typeFirstUnit);
});

secondUnitTypeField.addEventListener('change', (event) => {
    
    selectedOptionSecondUnitType = secondUnitTypeField.options[secondUnitTypeField.selectedIndex];
    typeSecondUnit = selectedOptionSecondUnitType.value;
    console.log(typeSecondUnit);
});

btnSwap.addEventListener('click', (event) => {
    console.log('swap button pressed');
    const firstIndex = firstUnitTypeField.selectedIndex;
    const secondIndex = secondUnitTypeField.selectedIndex;
    console.log('indexes: ' + firstIndex + ' ' + secondIndex);
    let changeEvent = new Event('change');
    if(firstIndex === secondIndex && firstIndex == 0){
        firstUnitTypeField.selectedIndex = 1;
        secondUnitTypeField.selectedIndex = 1;
        firstUnitTypeField.dispatchEvent(changeEvent);
        secondUnitTypeField.dispatchEvent(changeEvent);


    } else if (firstIndex === secondIndex && firstIndex == 1){
        firstUnitTypeField.selectedIndex = 0;
        secondUnitTypeField.selectedIndex = 0;
        firstUnitTypeField.dispatchEvent(changeEvent);
        secondUnitTypeField.dispatchEvent(changeEvent);

    }
    
})

btnbinaryConverter.addEventListener('click', async () => {
  
    //Type of Number to Convert From: Binary or Decimal
    firstUnitTypeField = document.getElementById("firstUnitType");
    secondUnitTypeField = document.getElementById("secondUnitType");

    console.log(firstUnitTypeField + " " + secondUnitTypeField);

    const valueInserted = document.getElementById("valueToConvert").value;

    if(typeFirstUnit == "fromBinary" && typeSecondUnit == "toDecimal" ){
        
        console.log(valueInserted.toString().length);
        finalResult = binaryCalculate(valueInserted, valueInserted.toString().length, 1);
        console.log('finalResult is ' + finalResult);
 

    } else if(typeFirstUnit == "fromBinary" && typeSecondUnit == "toBinary" ) {
        finalResult = valueInserted;
    }

    if (typeFirstUnit == "fromDecimal" && typeSecondUnit== "toBinary"){
       
        console.log(valueInserted);
        
        finalResult = decimalCalculate(valueInserted);
        console.log('finalResult is ' + finalResult);
    }else if(typeFirstUnit == "fromDecimal" && typeSecondUnit == "toDecimal") {
        finalResult = valueInserted;
    }

    const resultadoElement = document.getElementById("binaryResult");
    resultadoElement.textContent = "";
    if(finalResult != undefined){
    resultadoElement.textContent = Number(finalResult).toFixed(0);
    } else {
    resultadoElement.textContent = "Unable to calculate due to input error.\nTry inserting a number";
    }
});