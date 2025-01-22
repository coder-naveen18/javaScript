

const from_currency = document.querySelector('#from_currency');
const to_currency = document.querySelector('#to_currency');
const result_para = document.querySelector('.final_result');


 async function fromApiDetails() {
    const requestUrl =await  fetch('https://v6.exchangerate-api.com/v6/1a809ee2c0e699c7643551cb/latest/USD')
    const data = await requestUrl.json();

    console.log(data)
    const user = data.conversion_rates;
    console.log(user);
    
    
    currencyAdd(user); 
    
}

let optionText;
let optionValue;

// currencies add to the dropDown option---->

function currencyAdd(user){
    for (const  key in user) {
            optionText = key;
            optionValue = user[key];
            console.log(`${optionText}  ${optionValue}`)


             const option = document.createElement("option");
             option.value = key;
             option.text = key;
// Adding to the to currency option
             from_currency.add(option);            
        }

        for (const  key in user) {
            optionText = key;
            optionValue = user[key];
            console.log(`${optionText}  ${optionValue}`)


             const option = document.createElement("option");
             option.value = key;
             option.text = key;
// Adding to the to currency option
             to_currency.add(option);   
        }
    }
    // result_para.innerHTML = `${optionText} ${optionValue}  = ${optionText} ${optionValue}`

    // setting default values 

    to_currency.innerHTML = `<option>INR</option>`
    from_currency.innerHTML = `<option>USD</option>`

    let convertCurrency = ()=>{
            const Amount = document.querySelector('#amount');
            const fromCurrency = from_currency.value;
            const toCurrency = to_currency.value;

            if(Amount.length != 0){
                alert("okay");
            }
            else{
                alert("Please enter a valid value");
            }
    }

    document.querySelector("#button").addEventListener("click", convertCurrency)

    







fromApiDetails();
