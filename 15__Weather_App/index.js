

let CityName = document.getElementById('input_City');
let searchButton = document.getElementById('button');
let Result = document.querySelector('.result');


// let getWeather = ()=>{

//     let cityValue = CityName.value;
//     console.log(cityValue)

//     if(cityValue.length === 0){
//         Result.innerHTML= `<h3> Please enter a valid City Name </h3>`;
//     }
//     else{
    
//         let requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q={cityValue}&appid={79eea62ac27bae462ecf01bc252bacbf}&units=metric';
    
//         fetch(requestUrl).then((res)=> res.json()).then((data)=>{
//             console.log(data)
//             console.log(data.weather[0])
//         })
        
//     }

    
// }

getWeather();



