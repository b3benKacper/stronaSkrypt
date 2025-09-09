const weatherData = {{data}};
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

