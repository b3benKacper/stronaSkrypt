const weatherData = [{"time": "2025-09-04T00:00", "temperature": 16.5, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-04T01:00", "temperature": 16.1, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-04T02:00", "temperature": 15.5, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-04T03:00", "temperature": 14.5, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-04T04:00", "temperature": 14.3, "code": 0, "icon": "☀️", "description": "Bezchmurnie"}, {"time": "2025-09-04T05:00", "temperature": 14.5, "code": 0, "icon": "☀️", "description": "Bezchmurnie"}, {"time": "2025-09-04T06:00", "temperature": 16.5, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-04T07:00", "temperature": 19.8, "code": 0, "icon": "☀️", "description": "Bezchmurnie"}, {"time": "2025-09-04T08:00", "temperature": 22.0, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-04T09:00", "temperature": 23.7, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-04T10:00", "temperature": 25.5, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-04T11:00", "temperature": 26.9, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-04T12:00", "temperature": 27.7, "code": 0, "icon": "☀️", "description": "Bezchmurnie"}, {"time": "2025-09-04T13:00", "temperature": 28.1, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-04T14:00", "temperature": 28.4, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-04T15:00", "temperature": 28.2, "code": 0, "icon": "☀️", "description": "Bezchmurnie"}, {"time": "2025-09-04T16:00", "temperature": 27.9, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-04T17:00", "temperature": 26.3, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-04T18:00", "temperature": 23.8, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-04T19:00", "temperature": 21.7, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-04T20:00", "temperature": 20.4, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-04T21:00", "temperature": 19.5, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-04T22:00", "temperature": 18.8, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-04T23:00", "temperature": 18.2, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-05T00:00", "temperature": 17.7, "code": 0, "icon": "☀️", "description": "Bezchmurnie"}, {"time": "2025-09-05T01:00", "temperature": 17.1, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-05T02:00", "temperature": 16.8, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-05T03:00", "temperature": 16.5, "code": 0, "icon": "☀️", "description": "Bezchmurnie"}, {"time": "2025-09-05T04:00", "temperature": 16.2, "code": 0, "icon": "☀️", "description": "Bezchmurnie"}, {"time": "2025-09-05T05:00", "temperature": 15.9, "code": 0, "icon": "☀️", "description": "Bezchmurnie"}, {"time": "2025-09-05T06:00", "temperature": 17.3, "code": 0, "icon": "☀️", "description": "Bezchmurnie"}, {"time": "2025-09-05T07:00", "temperature": 19.7, "code": 0, "icon": "☀️", "description": "Bezchmurnie"}, {"time": "2025-09-05T08:00", "temperature": 22.0, "code": 0, "icon": "☀️", "description": "Bezchmurnie"}, {"time": "2025-09-05T09:00", "temperature": 23.4, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-05T10:00", "temperature": 22.7, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-05T11:00", "temperature": 23.3, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-05T12:00", "temperature": 22.3, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-05T13:00", "temperature": 21.6, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-05T14:00", "temperature": 21.5, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-05T15:00", "temperature": 21.6, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-05T16:00", "temperature": 21.2, "code": 80, "icon": "🌦️", "description": "Lekkie przelotne deszcze"}, {"time": "2025-09-05T17:00", "temperature": 19.5, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-05T18:00", "temperature": 18.4, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-05T19:00", "temperature": 17.8, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-05T20:00", "temperature": 17.4, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-05T21:00", "temperature": 17.0, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-05T22:00", "temperature": 16.7, "code": 61, "icon": "🌦️", "description": "Lekki deszcz"}, {"time": "2025-09-05T23:00", "temperature": 16.6, "code": 61, "icon": "🌦️", "description": "Lekki deszcz"}];
const pogoda = document.getElementById("pogoda");
const godzina = document.getElementById("godzina");

function updateTime() {
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
if (hours < 10) hours = "0" + hours;
if (minutes < 10) minutes = "0" + minutes;

godzina.innerHTML =hours + ":" + minutes;

}

function updateWeather() {
// pogoda z skryptu z api
const now = new Date();

const currentTimeStr = now.toISOString().slice(0, 13) + ":00";
const currentWeather = weatherData.find(w => w.time.startsWith(currentTimeStr));

if (currentWeather) {
    pogoda.innerHTML = `<h3>Pogoda: ${currentWeather.temperature} °C ${currentWeather.icon} </h3>`;
} else {
    pogoda.innerHTML = "<h3>Brak danych dla bieżącej godziny</h3>";
}
}

updateTime();
updateWeather();
setInterval(updateTime, 60000);
setInterval(updateWeather, 3600000);

