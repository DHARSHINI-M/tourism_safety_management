import './style.css';
import useScript from './useScript';
 function DisplaySMap(params) {
    return(
        <div>
             <div id="map"></div>
                <div id="pano"></div>
                {useScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDk19npnuTEdJXwb-7jZT74TxzEbXRb6LU&callback=initialize&v=weekly")}
                
        </div>
    );
}
export default DisplaySMap;