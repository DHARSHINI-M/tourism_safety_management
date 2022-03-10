
function initialize() {
    const fenway = { lat: 13.0499526, lng: 80.2824026 };
    const map = new google.maps.Map(document.getElementById("mapss"), {
        center: fenway,
        zoom: 14,
    });
    const panorama = new google.maps.StreetViewPanorama(
        document.getElementById("panoss"),
        {
        position: fenway,
        pov: {
            heading: 34,
            pitch: 10,
        },
        }
    );
    
    map.setStreetView(panorama);
    }

