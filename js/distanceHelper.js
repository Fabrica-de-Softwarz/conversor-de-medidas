 export function defineConversionFactor(conversionTypeFrom){
    switch(conversionTypeFrom){
        case 'milha':
            console.log("milha")
            return 160934;
        case 'jarda':
            console.log("jarda")
            return 91.44;
        case 'pé':
            console.log("pé")
            return 30.48;
        case 'polegada':
            console.log("polegada")
            return 2.54;
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
            return 100000;

    };
}