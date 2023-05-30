export async function getCurrencyRates() {
  const appId = 'fc25242735d34e3da284c78de0776e75'
  const BASE_URL = `https://openexchangerates.org/api/latest.json?app_id=${appId}`;
  const today = '05-29-2023'
  
  try {

    
    const response = await fetch(BASE_URL);
    const jsonData = await response.json();
    const data = jsonData.value[0];
    const cotacaoVenda = data.cotacaoVenda;
    console.log(cotacaoVenda);

    return cotacaoVenda;
  } catch (error) {
    console.error(error);
  }
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


export async function getCurrencyRateDate(symbol='USD', date='05-29-2023'){
  const BCB_CUR_URL = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${symbol}'&@dataCotacao='${date}'&$top=1&$format=json&$select=cotacaoVenda`

  try {    
    const response = await fetch(BCB_CUR_URL);
    const jsonData = await response.json();
    const data = jsonData.value[0];
    const cotacaoVenda = data.cotacaoVenda;
    console.log(cotacaoVenda);

    return cotacaoVenda;
  } catch (error) {
    console.error(error);
  }

}
