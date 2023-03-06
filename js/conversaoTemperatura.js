import { fahrenheitConversion, celsiusConversion, KelvinConversion } from "./temperatureHelper.js";

const btnFahrenheitConverter = document.getElementById("btn-convertToFahrenheit");
const btnCelsiusConverter = document.getElementById("btn-convertToCelsius");
const btnKelvinConverter = document.getElementById("btn-convertToKelvin");
const tempTypeSelector = document.getElementById("select-tempType")

var selectElementTempType = document.getElementById("select-tempType");
var selectedOptionTempType = selectElementTempType.options[selectElementTempType.selectedIndex];
var selectedTempTypeValue = selectedOptionTempType.value;

tempTypeSelector.addEventListener('change', (event) => {
    selectedOptionTempType = selectElementTempType.options[selectElementTempType.selectedIndex];
    selectedTempTypeValue = selectedOptionTempType.value;
    console.log(selectedTempTypeValue);
}); 


btnFahrenheitConverter.addEventListener('click', async () => {

    //Temperatura a Converter
    let changeEvent = new Event('change');
    tempTypeSelector.dispatchEvent(changeEvent);


    const valueInserted = document.getElementById("inputTempValue").value;
    var finalResult = fahrenheitConversion(selectedTempTypeValue, valueInserted);
    console.log(finalResult);

    const resultadoElement = document.getElementById("tempResult");
    resultadoElement.textContent = Number(finalResult).toFixed(2);
});

btnCelsiusConverter.addEventListener('click', async () => {

    //Temperatura a Converter
    let changeEvent = new Event('change');
    tempTypeSelector.dispatchEvent(changeEvent);


    const valueInserted = document.getElementById("inputTempValue").value;
    var finalResult = celsiusConversion(selectedTempTypeValue, valueInserted);
    console.log(finalResult);

    const resultadoElement = document.getElementById("tempResult");
    resultadoElement.textContent = Number(finalResult).toFixed(2);
});

btnKelvinConverter.addEventListener('click', async () => {

    //Temperatura a Converter
    let changeEvent = new Event('change');
    tempTypeSelector.dispatchEvent(changeEvent);


    const valueInserted = document.getElementById("inputTempValue").value;
    var finalResult = KelvinConversion(selectedTempTypeValue, valueInserted);
    console.log(finalResult);

    const resultadoElement = document.getElementById("tempResult");
    resultadoElement.textContent = Number(finalResult).toFixed(2);
});
