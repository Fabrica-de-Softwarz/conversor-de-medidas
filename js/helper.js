export function getExchangeRate(apiUrl, appId) {
    const url = `${apiUrl}/latest.json?app_id=${appId}&base=USD&symbols=BRL`;
    
    return fetch(url)
      .then(response => response.json())
      .then(data => data.rates.BRL)
      //.then(usdToBrlRate => {
       // return usdToBrlRate;
      //})
      .catch(error => {
        console.log(`Error fetching exchange rate: ${error}`);
        throw error;
      });
  }
  

 