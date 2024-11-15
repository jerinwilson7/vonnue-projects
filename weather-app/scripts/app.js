


const getWeather = () =>{
    const apiKey = '58ba930b2cb94337c416ae307809ef79';
    const city = document.getElementById('city').value;

    if (!city){
        alert('Please enter a city');
        return;
    }

    // const currentWeatherUrl = `https://api.openweather.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // const forcastUrl = `https://api.openweathermap.org/data/2.5/forcast?q=${city}&appid=${apiKey}`;

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    // console.log(forcastUrl);
    // console.log(currentWeatherUrl);


    fetch(currentWeatherUrl)
    // .then((response)=>{
    //     // console.log(response);
    //     response.json()
        
    // })
    .then(response=>response.json())
    // .then((response)=>{
    //     const res = response.json();
    //     console.log(res);
        
    // })
    // .then(data=>{displayWeather(data)
    // })
    .then((data)=>{
        console.log(data);
        displayWeather(data);
        
    })
    .catch(error=>{
        console.log('Error fetching  current weather data: ',error);
        alert('Error fetching current weather data. Please try again')
        
    })


    fetch(forcastUrl)
    
    .then(response=>response.json())
    .then(data =>{
        // console.log("data.list");
        // console.log(data.list);
        
        displayHourlyForcast(data.list)
    })
    .catch(error=>{
        console.log("Error fetching hourly forcast data:",error);
        alert('Error fetching hourly forcast data. Please try again')
        
    })
}

const displayWeather=(data)=>{

    console.log("displayWeather");
    console.log(data);
    
    
    

    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv =document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForcastDiv = document.getElementById('hourly-forecast')

    weatherInfoDiv.innerHTML = '';
    hourlyForcastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';


    if(data.cod === 404){
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;

    }else{
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`

        const temperatureHTML =`<p>${temperature}&deg;C</p>`;
        const weatherHTML = `
            <p>${cityName}</p>
            <p>${description}</p>`;

       tempDivInfo.innerHTML = temperatureHTML;
       weatherInfoDiv.innerHTML = weatherHTML;
       weatherIcon.src = iconUrl;
       weatherIcon.alt = description 
       
       showImage();



    }
}

const displayHourlyForcast = (hourlyData)=>{
    // console.log(hourlyData);
    
    const hourlyForcastDiv = document.getElementById('hourly-forecast');
    const next24Hours = hourlyData.slice(0,8);
    // console.log(next24Hours);
    
    


    next24Hours.forEach(item=>{

        const dateTIme = new Date(item.dt * 1000);
        const hour = dateTIme.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        
        // const iconUrl = `https://openweathermap.org/img/wn/01d.png`;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHTML = `
            <div class ="hourly-item">
                <span>${hour}:00</span>
                <img src = '${iconUrl}' alt = "Hourly weather icon">
                <span>${temperature}&deg;C<span>
                </div`;
        
            hourlyForcastDiv.innerHTML += hourlyItemHTML;
    })
}

const showImage = () =>{
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block'
}