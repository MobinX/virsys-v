import React from "react";
import {DonutLarge} from "@material-ui/icons";
import "./Home.css";
function Dashbord(){

    return(
        <div>
        <div className="info-card">
            <div className="cont">
            <h1>204</h1>
            <p>Meeting Perfomed</p>
            </div>
            <div className="ico">
                <DonutLarge fontSize="inherit"  />
            </div>
        </div>
        <div className="weather-card weather-bg-night">
            <div className="cont">
                <h1>28º</h1>
                <p>Dhaka</p>
            </div>
        </div>
        </div>
        
    );
}
export default Dashbord;