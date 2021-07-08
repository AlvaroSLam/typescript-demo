const successFunction = (position) => {
    
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude
    console.log(`https://www.google.fr/maps/@${latitude}.${longitude}`)
}

const errorFunction = () => {
    alert('Could not get your position');
}



navigator.geolocation.getCurrentPosition(successFunction, errorFunction)