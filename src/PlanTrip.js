import GuidedTour from "./components/GuidedTour";
import SelfTour from "./components/SelfTour";
import { useState } from "react";
function PlanTrip(props) {
    const [isGuided, setGuided] = useState(true);
    return(
        <div className="planTripImage">
        <div style={{paddingTop:'4rem'}}>
            <div className="row" >
                <div className="col-md-6">
                <GuidedTour/>
                    </div>
                <div className="col-md-6">
                <SelfTour/>
                    </div>
            </div>
            </div>
            
            
        </div>
    );
}
export default PlanTrip;