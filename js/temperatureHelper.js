 export function defineTempConversionFactor(conversionTypeFrom, tempValue){
    switch(conversionTypeFrom){
        case 'fahrenheit':
            console.log("fahrenheit")
            return 32 + (tempValue * 9 / 5);
        case 'celsius':
            console.log("Celsius")
            return (tempValue - 32) * (5 / 9);
        case 'kelvin':
            console.log("Kelvin")
            return 273.15 + ((tempValue - 32) * 5 / 9) ;

    };
}

