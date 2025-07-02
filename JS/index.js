var search = document.querySelector("#search");
var sumbit = document.querySelector("#sumbit");
var Data = document.querySelector("#Data");

var today = new Date();
var day = today.getDate();
var dayIndex = today.getDay();
var monthIndex = today.getMonth();

var daysEnglish = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var monthsEnglish = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var monthName = monthsEnglish[monthIndex];
var dayName = daysEnglish[dayIndex];
var two_day = daysEnglish[(dayIndex + 1) % 7];
var three_day = daysEnglish[(dayIndex + 2) % 7];

function getdata(city) {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    `http://api.weatherapi.com/v1/search.json?key=7adfa5c8c1bd4a2f944160254250107&q=${city}`
  );
  request.send();

  request.addEventListener("load", function () {
    var recipes = JSON.parse(request.response);
    console.log(recipes);
    display(recipes);
    localStorage.setItem("weather", JSON.stringify(recipes));
  });
}

sumbit.addEventListener("click", function () {
  getdata(search.value);
});

function display(data) {
  var cartoona = "";
  for (let i = 0; i < data.length; i++) {
    cartoona = `
        <div class="box col-md-4 p-5 rounded-2 ">
          <div class="head d-flex justify-content-between rounded-1">
            <div>${dayName}</div>
            <div>${day} ${monthName}</div>
          </div>
          <h6 class="text-white location py-2">${data[i].name}</h6>
          <h1 class="text-white degree">${data[i].lat}℃</h1>
          <img src="./Weather/imgi_6_113.png" alt="">
          <span class="text-info">sunny</span>
          <div class="icons">
            <span class="px-2"><img src="./Weather/imgi_3_icon-umberella.png" alt=""><small class="text-white">${data[i].lon}</small></span>
            <span class="px-2"><img src="./Weather/imgi_4_icon-wind.png" alt=""></span>
            <span class="px-2"><img src="./Weather/imgi_5_icon-compass.png" alt=""></span>
          </div>
        </div>

        <div class="box2 col-md-4 p-5 rounded-2">
          <div class="head d-flex justify-content-center rounded-1">
            <div>${two_day}</div>
          </div>
          <div class="data d-flex align-items-center flex-md-column py-5">
            <img src="./Weather/imgi_6_113.png" class="text-center" alt="">
            <h1 class="text-white degree">${data[i].lat}℃</h1>
            <span class="text-center text-white">${data[i].lon}</span>
            <span class="text-info text-center">sunny</span>
          </div>
        </div>

        <div class="box3 col-md-4 p-5 rounded-2">
          <div class="head d-flex justify-content-center rounded-1">
            <div>${three_day}</div>
          </div>
          <div class="data d-flex align-items-center flex-md-column py-5">
            <img src="./Weather/imgi_6_113.png" class="text-center" alt="">
            <h1 class="text-white degree">${data[i].lat}℃</h1>
            <span class="text-center text-white"><small>${data[i].lon}</small></span>
            <span class="text-info text-center">sunny</span>
          </div>
        </div>
    `;
  }
  Data.innerHTML = cartoona;
}

window.addEventListener("load", function () {
  var saved = localStorage.getItem("weather");
  if (saved) {
    display(JSON.parse(saved));
  }
});
