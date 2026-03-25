async function getWeather() {
  const city = document.getElementById("city").value;

  const apiKey = "YOUR_API_KEY"; // 👈 yahan apna API key daalo

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 Temp: ${data.main.temp} °C</p>
      <p>☁ Weather: ${data.weather[0].main}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind: ${data.wind.speed} m/s</p>
    `;
  } catch {
    alert("Error fetching weather");
  }
}
