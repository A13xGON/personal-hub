
var dateEl = document.querySelector('.date');
var currentWeatherEl = document.querySelector('.current-weather');

var dateFormats = ["dddd, MMM D, YYYY", "MMM D, YYYY", "MMMM D, YYYY h:mm A", "ddd, MMM D, YYYY h:mm A" ];
var currentDateFormatIndex = 0;

dateEl.innerHTML = dayjs().format(dateFormats[currentDateFormatIndex]);



const nextDateFormat = function() {
    console.log("DATE CLICKED");
    currentDateFormatIndex++;
    if (currentDateFormatIndex < dateFormats.length) {
        dateEl.innerHTML = dayjs().format(dateFormats[currentDateFormatIndex]);
    } else {
        currentDateFormatIndex = 0;
        dateEl.innerHTML = dayjs().format(dateFormats[currentDateFormatIndex]);
    }
}

const buildCurrentWeather = function () {
    console.log("TODAY:" + dayjs().format(dateFormats[0]));

    var weatherEl = document.createElement("ul");
    var weatherTodayEl = document.createElement("li");

    weatherTodayEl.textContent = dayjs().format(dateFormats[0]);
    console.log(dayjs());
    console.log(weatherTodayEl);

    weatherEl.appendChild(weatherTodayEl);
    console.log("HERE");
    currentWeatherEl.appendChild(weatherEl);

}

dateEl.addEventListener('click', nextDateFormat);

//console.log(dayjs());
buildCurrentWeather();