
let apiUrl = 'https://v6.exchangerate-api.com/v6/1a809ee2c0e699c7643551cb/latest/USD';
let fromCurrency = document.querySelector('#from_current_currency');
let toCurrency = document.querySelector('#to_current_currency');
let Result = document.querySelector('#Result');



let data;
let response;
let user;


async function getDetailsFromApi(){
    response = await fetch(apiUrl);
    data = await response.json()
    user = data.conversion_rates;
    letOptions(user);
    toOption(user);
}


// Adding the options of currency in from section---->

function letOptions(user){
    for(const key in user){
        // console.log(`${key} and ${user[key]}`)
        const option = document.createElement("option")
        option.value = `${key}`;
        option.text = `${key}`;
        fromCurrency.add(option) ;// Adding the default value
        
    }
}

// Adding the options of currency in To section--->

function toOption(user){
    for(const key in user){
        // console.log(`${key} and ${user[key]}`)
        const newOption = document.createElement("option")
        newOption.value = `${key}`;
        newOption.text = `${key}`;
        toCurrency.add(newOption) ;
        toCurrency.value = "INR"; // Adding the default value
    }
}

getDetailsFromApi();



// Lets convert the money ---->

let convertCurrency = ()=>{
    const Amount = document.querySelector('#amount').value;
    const fromTheCurrecny = fromCurrency.value;  // returning the key
    const toTheCurrecny = toCurrency.value;  // returning the key
    
    if(Amount.length !=  0 && Amount != 0){
        let fromExchangeRate = data.conversion_rates[fromTheCurrecny];
        let toExchangeRate = data.conversion_rates[toTheCurrecny];
        const convertedAmount = (Amount / fromExchangeRate) * toExchangeRate;
        // console.log(convertedAmount)
        
        Result.innerHTML = `${Amount} ${fromTheCurrecny} = ${toTheCurrecny} ${convertedAmount.toFixed(2)}`
    }
    else{
        alert("Please enter a valid Amount to convert")
    }

}

document.querySelector('#button').addEventListener("click", convertCurrency);
window.addEventListener('load' , convertCurrency)
