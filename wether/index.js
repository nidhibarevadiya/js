
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherCard = document.querySelector(".weather-card"); 

const getWeatherIcon = (condition) => {
  switch (condition) {
    case "Clouds":
      return "https://cdn-icons-png.flaticon.com/512/7774/7774417.png";
    case "Clear":
      return "https://static-00.iconduck.com/assets.00/clear-day-icon-1024x1024-exbd0lm2.png";
    case "Mist":
      return "https://cdn3d.iconscout.com/3d/premium/thumb/weather-6546350-5376613.png";
    case "Snow":
      return "https://static.vecteezy.com/system/resources/previews/022/287/856/original/3d-rendering-snowy-weather-icon-3d-render-snow-with-cloud-icon-snowfall-png.png";
    case "Smoke":
      return "https://cdn3d.iconscout.com/3d/premium/thumb/smoke-5175068-4328031.png";
    case "Rain":
      return "https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png";
    case "Drizzle":
      return "https://www.freeiconspng.com/thumbs/cloud-rain-icons/cloud-rain-weather-icon-25.png";
    default:
      return "https://cdn-icons-png.flaticon.com/512/1163/1163661.png"; 
  }
};

const UI = (data) => {
  let icon = getWeatherIcon(data.weather[0].main);
  weatherCard.innerHTML = `
    <div class="search">
      <input type="search" placeholder="enter city name" spellcheck="false" id="search" value="${data.name}">
    
    </div>
    <div class="weather">
      <img class="weather-icon" src="${icon}" alt="weather icon">
      <h1 class="temp">${Math.round(data.main.temp)}°C</h1>
      <h2 class="city">${data.name}</h2>
      <div class="details">
        <div style="display: flex;" class="col">
          <img class="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png">
          <div class="info">
            <p class="humidity">${data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div class="col">
          <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png">
          <div class="info">
            <p class="wind">${data.wind.speed} Km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  `;


  document.querySelector("#search").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const city = e.target.value.trim();
      if (city) checkWeather(city);
    }
  });
};

const checkWeather = async (city) => {
  let req = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97ed86b99fdcf738c7a080e0fa9fde20&units=metric`
  );

  if (!req.ok) {
    alert("City not found");
    console.error("City not found");
    return;
  }

  let res = await req.json();
  console.log(res);
  UI(res);
};

checkWeather("Mumbai");







// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97ed86b99fdcf738c7a080e0fa9fde20&units=metric