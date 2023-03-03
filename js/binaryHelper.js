export function binaryCalculate(binaryNumber, numberLen, counter){

if(checkString(binaryNumber.toString()) != true ){
    console.log('not a binary number');
    return;
}

var multiplicand = 0;
var multiplier = 0;
var sumFactor = 0;
var newNumber = 0;

;
multiplicand = binaryNumber % 10;


//console.log('multiplicand: ' + multiplicand);

multiplier = Math.pow(2, counter -1);
//console.log('multiplier is ' + multiplier);

newNumber = Math.floor(binaryNumber / 10);
//console.log('newnumber is ' + newNumber);

sumFactor = multiplicand * multiplier;
//console.log('sumfactor is ' + sumFactor);

    if(numberLen == counter){
        return sumFactor;
    } else{
        return sumFactor + binaryCalculate(newNumber, numberLen, counter + 1);
    };

}

export function checkString(str) {
    let isBinary = false;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "0" || str[i] == "1") {
        isBinary = true;
      } else {
        isBinary = false;
      }
    }
    return isBinary;
  }

  export function decimalCalculate(decimalNumber){

    var logNumber = 0;
    var powerNumber = 0;
    var result = 0;


     
    logNumber = Math.log2(decimalNumber);
    powerNumber = Math.floor(logNumber);
    console.log('powerNumber is ' + powerNumber);

    if( decimalNumber % Math.pow(2, powerNumber) == 0){
      result = Math.pow(10, powerNumber);
      console.log(result);
      return result;
    } else {
      result = Math.pow(10, powerNumber);
      console.log(result);
      return result + decimalCalculate(decimalNumber - Math.pow(2, powerNumber));
    }

  }