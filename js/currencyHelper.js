export async function getCurrencyRates() {
  const appId = 'fc25242735d34e3da284c78de0776e75'
  const BASE_URL = `https://openexchangerates.org/api/latest.json?app_id=${appId}`;

  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const rates = data.rates;
    console.log(rates);
    return rates;
  } catch (error) {
    console.error(error);
  }
}



export async function convertCurrency(amount, fromCurrency, toCurrency) {
  const appId = 'fc25242735d34e3da284c78de0776e75';
  const response = await fetch(`https://openexchangerates.org/api/convert/${amount}/${fromCurrency}/${toCurrency}?app_id=${appId}`);
  const data = await response.json();
  return data;
}

export function assignSymbols(currencyTarget){
 
  let currencySymbol ="";

  switch(currencyTarget){
    case("euro"):
      currencySymbol = 'EUR';
      console.log(currencySymbol);
      break;

    case("dolar"):
      currencySymbol = 'USD';
      console.log(currencySymbol);
      break;

    case("real"):
      currencySymbol = 'BRL';     
      console.log(currencySymbol);
      break;
  }

  return currencySymbol;
}


/*

  // return values
  return {
    'firstName': firstName,
    'lastName': lastName
  };

export function getExchangeRate(apiUrl, appId) {
    const url = `${apiUrl}/latest.json?app_id=${appId}&base=USD&symbols=BRL`;
    
    return fetch(url)
      .then(response => response.json())
      .then(data => data.rates.BRL)
      .catch(error => {
        console.log(`Error fetching exchange rate: ${error}`);
        throw error;
      });
  }

  export function getExchangeRateAsync(apiUrl, appId, valueToConvert, currencyFrom, currencyTo) {

    var symbolFrom = "";
    var symbolTo = "";

    switch(currencyFrom){
      case("euro"):
        symbolFrom = 'EUR';
        break;
      case("dolar"):
        symbolFrom = 'USD';
        break;
      case("real"):
        symbolFrom = 'BRL';     
    }

    switch(currencyTo){
      case("euro"):
      symbolTo = data.rates.EUR;
      break;
    case("dolar"):
      symbolTo = data.rates.USD;
      break;
    case("real"):
      symbolTo = data.rates.BRL;
    }

    console.log("symbolFrom: " + symbolFrom + "\n" + "\t symbolTo: " + symbolTo);
    const url = `${apiUrl}/latest.json?app_id=${appId}&base=${symbolFrom}&symbols=${symbolTo}`;
    
    return fetch(url)
      .then(response => response.json())
      .then(data => symbolTo)
      .catch(error => {
        console.log(`Error fetching exchange rate: ${error}`);
        throw error;
      });
  }

  const getExchangeRate = async (apiUrl, appId) => {
    const response = await fetch(`${apiUrl}?app_id=${appId}&symbols=BRL`);
    const data = await response.json();
    const usdToBrlRate = data.rates.BRL;
    return usdToBrlRate;
  };
  
  export default getExchangeRate;
  

  */