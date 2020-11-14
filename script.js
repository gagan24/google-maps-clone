mapboxgl.accessToken = 'pk.eyJ1Ijoic2dhZ2FuIiwiYSI6ImNraGh6eDhjNTB4aWQyenFxb2Z3MDczc2YifQ.ZIMo6PmfcQjs9yIkUYB2uw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken ,
      });
            
      map.addControl(directions, 'top-left');
}

