import React from "react";
import thankyouGif from "./milk-and-mocha-bear-hearts.gif"
import "./index.css"
function Thank_you(){
    return(
        <div id="thankyoucontainer">
            <img src={thankyouGif} alt="Kissing_gif" id="kissinggif"></img>
            <h1 id="thankyoutext">!!!!!Thank you!!!!!!</h1>
        </div>
    );
}


export default Thank_you;