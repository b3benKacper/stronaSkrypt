const weatherData = [{"time": "2025-09-09T00:00", "temperature": 13.8, "code": 45, "icon": "🌫️", "description": "Mgła"}, {"time": "2025-09-09T01:00", "temperature": 14.1, "code": 45, "icon": "🌫️", "description": "Mgła"}, {"time": "2025-09-09T02:00", "temperature": 14.2, "code": 45, "icon": "🌫️", "description": "Mgła"}, {"time": "2025-09-09T03:00", "temperature": 14.9, "code": 45, "icon": "🌫️", "description": "Mgła"}, {"time": "2025-09-09T04:00", "temperature": 14.7, "code": 45, "icon": "🌫️", "description": "Mgła"}, {"time": "2025-09-09T05:00", "temperature": 14.5, "code": 45, "icon": "🌫️", "description": "Mgła"}, {"time": "2025-09-09T06:00", "temperature": 14.5, "code": 45, "icon": "🌫️", "description": "Mgła"}, {"time": "2025-09-09T07:00", "temperature": 15.4, "code": 45, "icon": "🌫️", "description": "Mgła"}, {"time": "2025-09-09T08:00", "temperature": 17.5, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-09T09:00", "temperature": 19.4, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-09T10:00", "temperature": 21.5, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-09T11:00", "temperature": 23.0, "code": 1, "icon": "🌤️", "description": "Przeważnie bezchmurnie"}, {"time": "2025-09-09T12:00", "temperature": 24.0, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-09T13:00", "temperature": 24.6, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-09T14:00", "temperature": 24.6, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-09T15:00", "temperature": 24.3, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-09T16:00", "temperature": 23.8, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-09T17:00", "temperature": 22.5, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-09T18:00", "temperature": 20.4, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-09T19:00", "temperature": 19.0, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-09T20:00", "temperature": 17.9, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-09T21:00", "temperature": 17.2, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-09T22:00", "temperature": 16.5, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-09T23:00", "temperature": 15.9, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T00:00", "temperature": 15.7, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T01:00", "temperature": 15.4, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T02:00", "temperature": 15.3, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T03:00", "temperature": 15.4, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T04:00", "temperature": 15.0, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T05:00", "temperature": 15.0, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T06:00", "temperature": 15.7, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-10T07:00", "temperature": 17.4, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-10T08:00", "temperature": 18.7, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T09:00", "temperature": 20.0, "code": 2, "icon": "⛅", "description": "Częściowe zachmurzenie"}, {"time": "2025-09-10T10:00", "temperature": 22.1, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T11:00", "temperature": 23.5, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T12:00", "temperature": 24.4, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T13:00", "temperature": 24.7, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T14:00", "temperature": 24.8, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T15:00", "temperature": 24.8, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T16:00", "temperature": 24.3, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T17:00", "temperature": 22.6, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T18:00", "temperature": 20.9, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T19:00", "temperature": 19.6, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T20:00", "temperature": 19.0, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T21:00", "temperature": 18.6, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T22:00", "temperature": 18.5, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}, {"time": "2025-09-10T23:00", "temperature": 18.3, "code": 3, "icon": "☁️", "description": "Całkowite zachmurzenie"}];
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

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hour = String(now.getHours()).padStart(2, "0");

    const currentTimeStr = `${year}-${month}-${day}T${hour}:00`;
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

