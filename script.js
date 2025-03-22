//your JS code here. If required.
        document.getElementById("getWeather").addEventListener("click", function () {
            const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
            const city = "London";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const weather = data.weather[0].description;
                    document.getElementById("weatherData").innerText = `Current weather in London: ${weather}`;
                })
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                    document.getElementById("weatherData").innerText = "Failed to retrieve weather data.";
                });
        });
