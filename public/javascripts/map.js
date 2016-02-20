

function initializeMap() {





    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(42.263155, -83.020630),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

   
     var infowindow = new google.maps.InfoWindow({
    content: '<h1>Barrie</h1>' + '<p>Where the magic happens</p>'
  });
  
  function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

    var myLatlng = new google.maps.LatLng(42.263155, -83.020630);
    var marker = new google.maps.Marker({
        position: myLatlng
    });
      marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
    marker.setMap(map);
}





google.maps.event.addDomListener(window, 'load', initializeMap);
        
