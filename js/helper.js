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

  async function calculate(payload) {
    const BASE_URL = 'https://arturcortez.pythonanywhere.com/calc';
   
    
    const response = await fetch(`${BASE_URL}?${new URLSearchParams(payload)}`);
    const json_values = await response.json();
    
    const rq_input = json_values.input;
    const timestamp = json_values.timestamp;
    const character_count = json_values.character_count;
    const number1 = parseInt(json_values.number1);
    const number2 = parseInt(json_values.number2);
    const result = number1 * number2;
    
    console.log(`Input is ${rq_input}`);
    console.log(`Time is ${timestamp}`);
    console.log(`Character count is ${character_count}`);
    console.log(`Numbers are ${number1} and ${number2}`);
    console.log(`Result is ${result}`);
    
    return {input: rq_input, time: timestamp, characterCount: character_count, numbers: [number1, number2], result: result};
  }
  
  export { calculate };
  