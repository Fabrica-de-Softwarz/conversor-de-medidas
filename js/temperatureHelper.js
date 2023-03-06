 export function fahrenheitConversion(conversionTypeFrom, tempValue){
    switch(conversionTypeFrom){
        case 'fahrenheit':
            console.log("fahrenheit")
            return parseFloat(tempValue);
        case 'celsius':
            console.log("Celsius")
            return (parseFloat(tempValue) - 32) * (5 / 9);
        case 'kelvin':
            console.log("Kelvin")
            return 273.15 + ((parseFloat(tempValue) - 32) * 5 / 9) ;

    };
}

export function celsiusConversion(conversionTypeFrom, tempValue){
    switch(conversionTypeFrom){
        case 'fahrenheit':
            console.log("fahrenheit")
            return 32 + (parseFloat(tempValue) * 9 / 5);
        case 'celsius':
            console.log("Celsius")
            return parseFloat(tempValue);
        case 'kelvin':
            console.log("celsiusConversion: " + parseFloat(tempValue));
            console.log("Kelvin")
            return parseFloat(tempValue) + 273.15;

    };
}

export function KelvinConversion(conversionTypeFrom, tempValue){
    switch(conversionTypeFrom){
        case 'fahrenheit':
            console.log("fahrenheit")
            return 273.15 + ((parseFloat(tempValue) - 32) * 5 / 9);
        case 'celsius':
            console.log("Celsius")
            return parseFloat(tempValue) + 273.15;
        case 'kelvin':
            console.log("Kelvin")
            return parseFloat(tempValue) ;

    };
}
