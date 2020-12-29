var myGoogleMap, myMapsIndoors;

var init = function () {

   // Setup google map
   myGoogleMap = new google.maps.Map(document.getElementById('map'), { center: { lat: 36.7898821, lng: -3.9058143 }, zoom: 15 });
    //36.7898821,-3.9058143,15
   // Setup MapsIndoors
   myMapsIndoors= new mapsindoors.MapsIndoors({ map: myGoogleMap });

   // Add a floor selector
   var div = document.createElement('div');
   var floorSelector = new mapsindoors.FloorSelector(div, myMapsIndoors);
   myGoogleMap.controls[google.maps.ControlPosition.RIGHT_TOP].push(div);

};

google.maps.event.addDomListener(window, 'load', init);