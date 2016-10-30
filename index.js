var weather = require('./controllers/weather');

//grabs the current temperature for raleigh, nc
weather.get(function(returnedWeather){
  console.log("Current Temperature "+returnedWeather+"° in Raleigh NC");
})
