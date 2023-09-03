/**

/* DIV ID's

"city-name"
"country"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/
/*
// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */

const getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    //HINT: Use template literals to create a url with input and an API key
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '81653d6bfemsheb4f6abb69ccac1p16e0eajsn039a7eaa9f7f',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
        .then(response => response.json())
        .then(data=>data) // fetch all the data
        .catch(err => console.error(err));
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    const data = await getWeatherData(city) // this his  async
    showWeatherData(data)
    //ansync bc first get the data then only show

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}

document.addEventListener("DOMContentLoaded", async () =>{
    const data = await getWeatherData("Raipur")
    showWeatherData(data)
})

