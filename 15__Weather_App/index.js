

let CityName = document.getElementById('input_City');
let searchButton = document.getElementById('button');
let Result = document.querySelector('.result');




let getWeather = ()=>{

    let cityValue = CityName.value;

    if(cityValue.length == 0){
        Result.innerHTML= `<h3> Please enter a valid City Name </h3>`;
    }
    else{

    let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=79eea62ac27bae462ecf01bc252bacbf&units=metric`;

        fetch(requestUrl).then((resp)=> resp.json()).then((data)=>{

            Result.innerHTML = `
         <div class="Result_Of_Data">
            <h1>${data.name}</h1>
            <h2>${data.weather[0].description}</h2>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />
            <h1 id="Main_temp">${data.main.temp} &#176; </h1>
        <div class="temp_ratios">
            <div class="MinTemp">
            <p>Min Temp</p>
            <p>${data.main.temp_min} &#176;</p>
            </div>
            <div >
            <p>Max Temp </p>
            <p>${data.main.temp_max} &#176;</p></div>
            </div>
            </div>`

           
        })
        
        .catch(()=>{
            Result.innerHTML = `<p> City not found </p>`
    })

    }   
}



searchButton.addEventListener("click", getWeather);
window.addEventListener("load" , getWeather);



