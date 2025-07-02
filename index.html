var search = document.querySelector("#search");
var sumbit = document.querySelector("#sumbit");
var Data = document.querySelector("#Data");

var today = new Date();
var day = today.getDate();
var dayIndex = today.getDay();
var monthIndex = today.getMonth();

var daysEnglish = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthsEnglish = ["January", "February", "March", "April", "May", "June", "July",
                     "August", "September", "October", "November", "December"];

var monthName = monthsEnglish[monthIndex];
var dayName = daysEnglish[dayIndex];
var two_day = daysEnglish[(dayIndex + 1) % 7];
var three_day = daysEnglish[(dayIndex + 2) % 7];

function getdata(city) {
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=7adfa5c8c1bd4a2f944160254250107&q=${city}&days=3`)
    .then(res => res.json())
    .then(data => {
      display(data);
      localStorage.setItem("weather", JSON.stringify(data));
    })
    .catch(err => {
      console.log("Error:", err);
      Data.innerHTML = `<p class="text-white">City not found or API error.</p>`;
    });
}

sumbit.addEventListener("click", function () {
  getdata(search.value);
});

function display(data) {
  var cartoona = `
    <div class="box col-md-4 p-5 rounded-2">
      <div class="head d-flex justify-content-between rounded-1">
        <div>${dayName}</div>
        <div>${day} ${monthName}</div>
      </div>
      <h6 class="text-white location py-2">${data.location.name}</h6>
      <h1 class="text-white degree">${data.current.temp_c}℃</h1>
      <img src="https:${data.current.condition.icon}" alt="">
      <span class="text-info">${data.current.condition.text}</span>
      <div class="icons">
        <span class="px-2"><img src="Weather/imgi_3_icon-umberella.png" alt=""><small class="text-white">${data.current.humidity}%</small></span>
        <span class="px-2"><img src="Weather/imgi_4_icon-wind.png" alt=""><small class="text-white">${data.current.wind_kph} km/h</small></span>
        <span class="px-2"><img src="Weather/imgi_5_icon-compass.png" alt=""><small class="text-white">${data.current.wind_dir}</small></span>
      </div>
    </div>

    <div class="box2 col-md-4 p-5 rounded-2">
      <div class="head d-flex justify-content-center rounded-1"><div>${two_day}</div></div>
      <div class="data d-flex align-items-center flex-md-column py-5">
        <img src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="">
        <h1 class="text-white degree">${data.forecast.forecastday[1].day.avgtemp_c}℃</h1>
        <span class="text-info text-center">${data.forecast.forecastday[1].day.condition.text}</span>
      </div>
    </div>

    <div class="box3 col-md-4 p-5 rounded-2">
      <div class="head d-flex justify-content-center rounded-1"><div>${three_day}</div></div>
      <div class="data d-flex align-items-center flex-md-column py-5">
        <img src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="">
        <h1 class="text-white degree">${data.forecast.forecastday[2].day.avgtemp_c}℃</h1>
        <span class="text-info text-center">${data.forecast.forecastday[2].day.condition.text}</span>
      </div>
    </div>
  `;

  Data.innerHTML = cartoona;
}

window.addEventListener("load", function () {
  var saved = localStorage.getItem("weather");
  if (saved) {
    display(JSON.parse(saved));
  }
});
