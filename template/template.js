const weatherData = {{data}};
const pogoda = document.getElementById("pogoda");
const godzina = document.getElementById("godzina");

function updateTime() {
const hours = new Date().getHours();
const minutes = new Date().getMinutes();
if (hours < 10) hours = "0" + hours;
if (minutes < 10) minutes = "0" + minutes;

godzina.innerHTML ="Godzina: " + hours + ":" + minutes;

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

