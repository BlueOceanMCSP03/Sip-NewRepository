import React from 'react'

const GoogleMaps = () => {

    
    return (
        <div>
            <div id="map"></div>
            {function initMap() {
                let options = {
                    zoom: 2,
                    center: {lat: 30.2672, long: -97.7431}
                }
        
                let map = new google.maps.Map(document.getElementById('map'), options);
            }}
        </div>
    )
}

export default GoogleMaps;
