async function weather() {
    const locationInput = document.querySelector('#location');
    
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=b678f65e59524a89b0041811241003&q=${locationInput.value}&aqi=no`, {mode: 'cors'});
    const weatherData = await response.json();
    const currentWeather = {
        location: weatherData.location.name,
        temp: weatherData.current.temp_f,
        cloudCover: weatherData.current.condition.text,
        cloudCoverImg: weatherData.current.condition.icon
    }

    const weatherContentDiv = document.querySelector('#weather-content');

    const location = document.createElement('h2');
    location.textContent = currentWeather.location;

    const temp = document.createElement('h3'); 
    temp.textContent = Math.floor(currentWeather.temp) + '°F';

    const cloudCover = document.createElement('h3');
    cloudCover.textContent = currentWeather.cloudCover;

    const cloudCoverImg = document.createElement('img');
    cloudCoverImg.setAttribute('src', 'https:' + currentWeather.cloudCoverImg)
    
    weatherContentDiv.innerHTML = '';
    locationInput.value = '';
    weatherContentDiv.appendChild(location);
    weatherContentDiv.appendChild(temp);
    weatherContentDiv.appendChild(cloudCover);
    weatherContentDiv.appendChild(cloudCoverImg);
}

const submit = document.querySelector('#submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    weather();
})