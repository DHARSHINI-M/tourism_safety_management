import { useLocation } from "react-router-dom";
import { spots } from "../Contents/spots";
import DisMap from "./DisMap";
import { useState } from "react";
import ChatIndex from "../chatbot/ChatIndex";
import {Card,CardBody,CardImg,Carousel,Button,Form, Row,Col, InputGroup } from 'react-bootstrap';
import DisplaySMap from "../maps/DisplaySMap";
function SpotDetail(){
    const [index, setindex] = useState(0);
    const location = useLocation();
    const handleSelect = (selectedIndex, e) => {
        console.log(selectedIndex,"vk");
      };
    const imageiterate = spots.map((S)=>{
        if(S.name.valueOf() ==location.state.name.valueOf()){
            console.log(S.name);
            const imglist = S.img.map((imgsrc,index)=>{
                console.log(imgsrc,index);
            return (
            <Carousel.Item >
            <img style={{height: "50vh"}}
                className="d-block w-100"
                src={imgsrc}
                alt={S.img[0]}
            />
            </Carousel.Item>
            );
            });
            return(imglist);
        }     
    });
    const spot = spots.map((S)=>{
        if(S.name.valueOf() ==location.state.name.valueOf()){
            return(
                
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>{S.name}</h2>
                            <Carousel activeIndex={index}  >
                                {imageiterate}
                            </Carousel>
                            <h3>Description</h3>
                            <p>{S.discription}</p>
                        </div>
                        <div className="col-md-6">
                        <div className="map">
                            <DisMap latti={S.latti} longi={S.longi}/> 
                            
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="col-md-12">
                            <DisplaySMap/>
                        </div>
                    </div>
                    
                </div>
                
            );
        }
    }
    );
    return(
        <div className="container" style={{paddingTop:'4rem'}}>
            
            {spot}
               
        </div>
    );
}
export default SpotDetail;