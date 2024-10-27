
const selector = document.getElementById('moneda');  // Selects the currency dropdown
const basic = document.getElementById('basic');  // Selects the Basic price
const professional = document.getElementById('professional');  // Selects the Professional price
const premium = document.getElementById('premium');  // Selects the Premium price

selector.addEventListener('change', () => {
    const selectedCoin = selector.value;  // Gets the selected currency
    const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";
    
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json().then((data) => {
                    if (selectedCoin === 'eur') {
                        changePrice("€", data.usd.eur);
                    } else if (selectedCoin === 'gbp') {
                        changePrice("£", data.usd.gbp);
                    } else if (selectedCoin === 'usd') {
                        changePrice("$", data.usd.usd);
                    }
                });
            } else {
                throw new Error("Error on network response");
            }
        })
        .catch((error) => {
            console.log('Error: ' + error); 
        });
});

const changePrice = (symbol, conversion) => {
    const basicPrice = 0;
    const professionalPrice = (25 * conversion).toFixed(2);
    const premiumPrice = (60 * conversion).toFixed(2);

    basic.innerText = `${symbol}${basicPrice}`;  
    professional.innerText = `${symbol}${professionalPrice}`;  
    premium.innerText = `${symbol}${premiumPrice}`;  
};