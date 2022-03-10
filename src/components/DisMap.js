
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
const mapStyles = {
    width: '90%',
    height: '90%'
  };
function DisMap (props){
    return(
    <div>
        <Map
          google={props.google}
          zoom={18}
          style={mapStyles}
          mapTypes = "SATELLITE"
          initialCenter={{
            lat: props.latti,
            lng: props.longi
          }}
        >
         <Marker
          onClick={props.onMarkerClick}
          name={'This is test name'}
        />
        </Map>
      </div>
    );
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDk19npnuTEdJXwb-7jZT74TxzEbXRb6LU'
  })(DisMap);