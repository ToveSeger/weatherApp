let weather={ 
    apiKey: "b77416fab545e0f71f3e30c9a4c281e0",
        fetchweather: function(city){
            fetch("http://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
            )
            .then((response)=>response.json())
            .then((data)=>this.displayWeather(data));
            .catch((err) => {
                console.log(err);
                displayError(err);
            },
            )};           
       
        function displayWeather(data) {
        const {name} = data;
        const {icon, description}= data.weather[0];
        const {temp, humidity}= data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText="Weather right now in: " + name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+ icon +".png"
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp + "°C";
        document.querySelector(".humidity").innerText="Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText="Wind speed: " + speed + "km/h";
        document.querySelector(".flex").classList.remove("loading");
        }

        function search(){
            this.fetchWeather(document.querySelector(".searchBar").value);
        }

        function displayError(err){
            const {name} = data;
            const {icon, description}= data.weather[0];
            const {temp, humidity}= data.main;
            const {speed} = data.wind;
            document.querySelector(".city").innerText="Oops, something went wrong! ";
            document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+ icon +".png"
            document.querySelector(".description").innerText= err/* "Couldn't find the weather for" + name + "maybe you misspelled?" */;
            document.querySelector(".temp").innerText=temp + "°C";
            document.querySelector(".humidity").innerText="Humidity: " + humidity + "%";
            document.querySelector(".wind").innerText="Wind speed: " + speed + "km/h";
            document.querySelector(".flex").classList.remove("loading");
        }
};

document.querySelector(".searchBox button").addEventListener("click", function(){
    weather.search();

});

document.querySelector(".searchBar").addEventListener("keyup", function(event){
if(event.key=="Enter"){
    weather.search();
}
});



