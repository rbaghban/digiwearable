function initialize() {
    var mapCanvas = document.getElementById('map_canvas');
    var paarseh_location = new google.maps.LatLng(35.708635, 51.406296);

    var mapOptions = {
        center: paarseh_location,
        zoom: 17,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var marker = new google.maps.Marker({
        position: paarseh_location,
    });

    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);