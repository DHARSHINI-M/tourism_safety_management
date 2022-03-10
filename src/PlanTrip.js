import GuidedTour from "./components/GuidedTour";
import SelfTour from "./components/SelfTour";
import { useState } from "react";
import ChatIndex from "./chatbot/ChatIndex";
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
            <ChatIndex/>
            </div>
            
            
        </div>
    );
}
export default PlanTrip;