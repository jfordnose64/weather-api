let city = document.querySelector('.input-field')

const createProperSearch = () => {
  let cityName = city.value
  const url = 'http://api.openweathermap.org/data/2.5/weather'
  let search = cityName
  const apiKey = '32b3245d73de3274c4273429518d2502'
  const newUrl = url + '?' + 'q=' + search + '&units=imperial' + '&appid=' + apiKey
  return newUrl
}
const getWeather = () => {
  fetch(createProperSearch())
    .then(response => {
      return response.json()
    })
    .then(city => {
      console.log(city)
      document.querySelector('.display-weather').textContent = city.weather[0].main
      document.querySelector('.display-temp').textContent = city.main.temp
    })
}

// document.addEventListener('DOMContentLoaded', main)
document.querySelector('.enter').addEventListener('click', getWeather)