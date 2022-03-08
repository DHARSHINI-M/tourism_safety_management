import { useEffect,useState } from "react";
import DisMap from "./DisMap";
import { FormControl, InputGroup ,Card ,CardImg,Button, Pagination,Form,Col,Row} from 'react-bootstrap';
import { Locations } from "../Contents/Locations";
function SelfTour(props) {      
    const [lati, setlati] = useState({
        latii:0,
        longi:0
    });
    function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };
    function success(pos) {
        var crd = pos.coords;
        setlati({
            latii:crd.latitude,
            longi:crd.longitude
        });
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions
              .query({ name: "geolocation" })
              .then(function (result) {
                if (result.state === "granted") {
                  console.log(result.state);
                  //If granted then you can directly call your function here
                  navigator.geolocation.getCurrentPosition(success);
                } else if (result.state === "prompt") {
                  navigator.geolocation.getCurrentPosition(success, errors, options);
                } else if (result.state === "denied") {
                    navigator.geolocation.getCurrentPosition(success, errors, options);
                }
                result.onchange = function () {
                  console.log(result.state);
                };
              });
          } else {
            alert("Sorry Not available!");
          }
        
    }, []);
    const [search, setsearch] = useState("");
    const place = Locations.map((G)=>{
      return(
          <div className="team-grid col-lg-3 col-sm-6  mb-5 ">
          <img src={G.img} className="" alt="" />
          <div className="team-info text-center">
              <h3 className="">{G.spot[0]}</h3>
          </div>
      </div>
      );
      
  }
  );
        return (
          <div>
            <h2 style={{color:'white'}}>Self Tour</h2>
            <InputGroup size="sm">
                        <FormControl placeholder="Search City" name="search" value={search}
                            
                            className={"info-border"}
                            />
                        <InputGroup.Text>
                            <Button size="sm" variant="outline-danger" type="button" >
                              <i class="fa fa-times" aria-hidden="true"></i>
                            </Button>
                        </InputGroup.Text>
                      </InputGroup>

                     
            <div className="container py-md-5">
                <div className="row">
                    
                {place}
                    
                </div>
            </div>
             <div className="map">
                 <DisMap latti={lati.latii} longi={lati.longi}/> 
            </div>
          </div>
        );
      
    // return(
    //     <div style={{marginTop:'4rem'}}>
    //         Self Tour
    //     </div>
    // );
}
export default SelfTour;
