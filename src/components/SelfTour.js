import { useEffect,useState } from "react";
import DisMap from "./DisMap";
import { FormControl, InputGroup ,Card ,CardImg,Button, Pagination,Form,Col,Row} from 'react-bootstrap';
import { Locations } from "../Contents/Locations";
import { spots } from "../Contents/spots";
import { useHistory } from "react-router-dom";
function SelfTour(props) { 
   const history=useHistory();     
    const [lati, setlati] = useState({
        latii:0,
        longi:0
    });
    function handleCategory(id,name){
      console.log(id);
      history.push({ 
        pathname: `/spots/${name}`,
        state: {name: name}
      });
    }
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
    const [result, setResult] = useState(Locations);
    const searchChange = event => {
      console.log(event.target.value);
      setsearch(event.target.value);
      setter(event.target.value);
      
    };
    const cancelSearch =() => {
       setsearch('');
        setter('');
    };
    const setter = (svalue) =>{
      console.log("vijay",svalue);
      setResult(
        Locations.filter(item =>{
          return Object.keys(item).some(key=>
            item.name.toString().toLowerCase().includes(svalue.toString().toLowerCase()))
        }),
    );
    }
    const place = result && result.map((G)=>{
      return(
          <div className="team-grid col-lg-3 col-sm-6  mb-5 " onClick={() => handleCategory(G.id,G.spot[0])}>
          <img src={G.img} className="" alt="" />
          <div className="team-info text-center">
              <h3 className="">{G.spot[0]}</h3>
          </div>
      </div>
      );    
    });
    const place1 = result && result.map((G)=>{
      const spot=G.spot.map((S)=>{
        console.log(S);
        // const arr = spots.map((spo)=>{
        //   if(S.valueOf() == spo.name.valueOf()){
        //     //console.log(spo);
        //     return spo;
        //   }
        // });
        const arr = spots.filter(item =>{
          return Object.keys(item).some(key=>
            item.name.toString().toLowerCase().includes(S.toString().toLowerCase()))
        });
        
        if (arr.length >0){
          return (
            <div className="team-grid col-lg-3 col-sm-6  mb-5 " onClick={() => handleCategory(arr[0].id,arr[0].name)}>
              <img src={arr[0].img[0]} className="" alt="" />
              <div className="team-info text-center">
                  <h3 className="">{arr[0].name}</h3>
              </div>
            </div>
          );
        }
        
      });
        return(
          spot
        );
      });
        return (
          <div>
            <h2 style={{color:'white'}}>Self Tour</h2>
            <InputGroup size="sm">
                        <FormControl placeholder="Search City" name="search" value={search}
                            onChange={searchChange}
                            className={"info-border"}
                            />
                        <InputGroup.Text>
                            <Button size="sm" variant="outline-danger" type="button" onClick={cancelSearch}>
                              <i class="fa fa-times" aria-hidden="true"></i>
                            </Button>
                        </InputGroup.Text>
                      </InputGroup>

                     
            <div className="container py-md-5">
                <div className="row">
                    
                {(search==='')?place:place1}
                    
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
