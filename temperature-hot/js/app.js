const api_key = `2338a4c442aca682c09e2fdc1e6c2491`;



const searchTeampareture = () => {
    let searchInput = document.getElementById('input-field');

    if (searchInput.value === '') {
        alert('Please set a city name');
    }
    else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${api_key}&units=metric`;

        fetch(url)
            .then(res => res.json())
            .then(data => displayeWeather(data))
    }
    // Clear search field
    searchInput.value = '';
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayeWeather = weather => {
    if (weather.message === 'city not found') {
        alert('This is not a city name');
    }
    else {
        setInnerText('city-name', weather.name);
        setInnerText('dgree', weather.main.temp);
        setInnerText('weather-mood', weather.weather[0].main);
        // set weather image 
        const url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        const imgIcon = document.getElementById('image');
        imgIcon.setAttribute('src', url);
    }
}