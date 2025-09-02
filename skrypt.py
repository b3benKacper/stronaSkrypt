import locale
import datetime
import requests
from pathlib import Path
import json
import re

# zmiana miesiąca na polski tekst (translacja)
# windows
locale.setlocale(locale.LC_TIME, "Polish_Poland")

# mac / linux
# locale.setlocale(locale.LC_TIME, "pl_PL.UTF-8") 


# pogoda

weatherMap = {
    0:  { "description": "Bezchmurnie", "icon": "☀️" },
    1:  { "description": "Przeważnie bezchmurnie", "icon": "🌤️" },
    2:  { "description": "Częściowe zachmurzenie", "icon": "⛅" },
    3:  { "description": "Całkowite zachmurzenie", "icon": "☁️" },
    45: { "description": "Mgła", "icon": "🌫️" },
    48: { "description": "Mgła osadzająca szron", "icon": "🌫️❄️" },
    51: { "description": "Lekka mżawka", "icon": "🌦️" },
    53: { "description": "Umiarkowana mżawka", "icon": "🌧️" },
    55: { "description": "Gęsta mżawka", "icon": "🌧️" },
    56: { "description": "Lekka marznąca mżawka", "icon": "🌧️❄️" },
    57: { "description": "Gęsta marznąca mżawka", "icon": "🌧️❄️" },
    61: { "description": "Lekki deszcz", "icon": "🌦️" },
    63: { "description": "Umiarkowany deszcz", "icon": "🌧️" },
    65: { "description": "Ulewny deszcz", "icon": "🌧️" },
    66: { "description": "Lekki marznący deszcz", "icon": "🌧️❄️" },
    67: { "description": "Silny marznący deszcz", "icon": "🌧️❄️" },
    71: { "description": "Lekki śnieg", "icon": "🌨️" },
    73: { "description": "Umiarkowany śnieg", "icon": "🌨️" },
    75: { "description": "Intensywny śnieg", "icon": "❄️" },
    77: { "description": "Śnieg ziarnisty", "icon": "❄️" },
    80: { "description": "Lekkie przelotne deszcze", "icon": "🌦️" },
    81: { "description": "Umiarkowane przelotne deszcze", "icon": "🌧️" },
    82: { "description": "Silne przelotne deszcze", "icon": "⛈️" },
    85: { "description": "Lekkie przelotne opady śniegu", "icon": "🌨️" },
    86: { "description": "Silne przelotne opady śniegu", "icon": "❄️" },
    95: { "description": "Burza, słaba lub umiarkowana", "icon": "⛈️" },
    96: { "description": "Burza z drobnym gradem", "icon": "⛈️🌨️" },
    99: { "description": "Burza z silnym gradem", "icon": "⛈️❄️" }
}

url = "https://api.open-meteo.com/v1/forecast?latitude=51.8033&longitude=15.717&hourly=temperature_2m,weather_code"
dataOfWeather = requests.get(url).json()

hours = dataOfWeather["hourly"]["time"]
temps = dataOfWeather["hourly"]["temperature_2m"]
codes = dataOfWeather["hourly"]["weather_code"]

weather_list = []
for i in range(len(hours)):
    code = codes[i]
    weather = weatherMap.get(code, {"icon": "❓", "description": "Nieznana pogoda"})
    weather_list.append({
        "time": hours[i],
        "temperature": temps[i],
        "code": code,
        "icon": weather["icon"],
        "description": weather["description"]
    })

weather_json = json.dumps(weather_list, ensure_ascii=False)
pathJs = Path("website/script.js")
pathTemlateJs = Path("template/template.js")
with open(pathTemlateJs, "r", encoding="utf-8") as f:
    js_content = f.read()

js_content = js_content.replace("{{data}}", weather_json)

with open(pathJs, "w", encoding="utf-8") as f:
    f.write(js_content)


# data
today = datetime.date.today()
data = datetime.date.today().strftime("%A, %d %B %Y")

# api z specjalne dni ze zdrowiem, np. dzis jest dzień biegania 


# imieniny
url = "https://nameday.abalin.net/api/V2/today/europe"
headers = {
    "Content-Type": "application/json"
}
response = requests.get(url)
dataName = response.json()
imieniny_pl = dataName["data"]["pl"]




print(imieniny_pl)
print(today)

# dodawanie do html`a
pathTemplate = Path("template/template.html")
with open (pathTemplate, "r", encoding="utf-8") as f:
    html=f.read()

html = html.replace("{{imieniny}}", imieniny_pl)
html = html.replace("{{data}}", data)
pathIndex = Path("website/index.html")
with open(pathIndex, "w", encoding="utf-8") as f:
    f.write(html)

    