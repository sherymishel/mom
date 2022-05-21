export {getWeather}

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

city.addEventListener('keyup', () => {
    console.log(city.value)
    getWeather(city.value)
    setLocalStorage(city.value)
})

const setLocalStorage = (city) => {
    localStorage.setItem('city', city);
  }

const getLocalStorage = () => {
    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
      getWeather(city.value)
    }
  }
  window.addEventListener('load', getLocalStorage)

async function getWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    try {
    weatherIcon.style.visibility = 'visible'
    temperature.style.visibility = 'visible'
    weatherDescription.style.visibility = 'visible'
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    console.log(weatherIcon.classList)
    }
    catch (err) {
        console.log(err)
        weatherIcon.style.visibility = 'hidden'
        temperature.style.visibility = 'hidden'
        weatherDescription.style.visibility = 'hidden'
    }
  }
  getWeather()