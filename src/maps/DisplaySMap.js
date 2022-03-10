import './style.css';
import React from 'react';
import axios from 'axios';
import useScript from './useScript';
export default function DisplaySMap(params) {
  
    return(
        <div>
            <p>Street Map</p>
            <div id="mapss"></div>
            <div id="panoss"></div>
            {useScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDk19npnuTEdJXwb-7jZT74TxzEbXRb6LU&callback=initialize&v=weekly")}
        </div>
        
    );
}
