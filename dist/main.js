var successFunction = function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log("https://www.google.fr/maps/@" + latitude + "." + longitude);
};
var errorFunction = function () {
    alert('Could not get your position');
};
navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
