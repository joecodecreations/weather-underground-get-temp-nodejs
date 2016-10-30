var Wunderground = require('node-weatherunderground');
module.exports = {
  get: function (returnedWeather) {

    var weatherClient = new Wunderground('ENTER_API_KEY_HERE', "Raleigh", "NC");
        weatherClient.conditions('', function(err, data) {
        if (err) console.log(err);
        returnedWeather(Number((data.temp_f).toFixed(0))); //format the new temp and export it 

    });



  } //end api function
};
