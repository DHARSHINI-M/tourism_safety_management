import { Guides } from "../Contents/Guides";
import { useState } from "react";
import { FormControl, InputGroup ,Card ,CardImg,Button, Pagination,Form,Col,Row} from 'react-bootstrap';
function GuidedTour(props) {
    const [search, setsearch] = useState("");
    const Guide = Guides.map((G)=>{
        return(
            <div className="team-grid col-lg-3 col-sm-6  mb-5">
            <img src={G.img} className="" alt="" />
            <div className="team-info text-center">
                <h3 className="">{G.Name}</h3>
            </div>
        </div>
        );
        
    }
    );
    return(
        <div >
            <h2 style={{color:'white'}}>Guided Tour</h2>
            
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
                    
                {Guide}
                    
                </div>
            </div>


        </div>
    );
}
export default GuidedTour;