 export function defineConversionFactor(conversionTypeFrom){
    switch(conversionTypeFrom){
        case 'milha':
            console.log("milha")
            return 5;
        case 'jarda':
            console.log("jarda")
            return 7;
        case 'pé':
            console.log("pé")
            return 11;
        case 'polegada':
            console.log("polegada")
            return 13;
    };
}

export function defineConversionResultFactor(conversionTypeTo){
    switch(conversionTypeTo){
        case 'centimetro':
            console.log("centimetro")
            return 1;
        case 'metro':
            console.log("metro")
            return 100;
        case 'quilometro':
            console.log("quilômetro")
            return 1000;

    };
}