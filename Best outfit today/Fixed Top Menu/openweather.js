function weather() {

    var location = document.getElementById("location");
    var apiKey = 'ddcae1004c79558916105fff20583697';
    var url = 'https://api.openweathermap.org/data/2.5/';

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      location.innerHTML = 'Latitude is ' + latitude + '° Longitude is ' + longitude + '°';

       $.getJSON(url + "weather?lat=" + latitude + "&lon=" + longitude + Default + apiKey, function(data) {
        $('#temp').html(data.base.temp + '° F');
        $('#minutely').html(data.weather.main);
        console.log(data);
      });
    }

    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }

    location.innerHTML = "Locating...";
  }

  weather();