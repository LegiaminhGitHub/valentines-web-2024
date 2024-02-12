// Main_page.js
import React, { useEffect, useState } from "react";
import "./index.css"; // Make sure this path is correct
import question_gif from "./bear.gif";
import { useNavigate } from "react-router-dom";
const message = ["please" , "please!" , "!!please!!" , "give me a chance"]
function Main_page() {
    const navigate = useNavigate();
    const [yesBttnHeight, setYesBttnHeight] = useState("150px");
    const [yesBttnWidth, setYesBttnWidth] = useState("170px");
    const [noBttnHeight, setNoBttnHeight] = useState("150px");
    const [noBttnWidth, setNoBttnWidth] = useState("170px");
    const [nobtntimesclicked , setnobttnclick] = useState(0)
    const [left_val , setLeft_val] = useState("600px")
    const [top_val , setTop_val] = useState("500px")
    const [text , setText] = useState("");
    function navigateToThanks() {
        navigate("/thanks");
    }

    function handleNoButtonClick() {
        setNoBttnHeight((prevHeight) => (parseInt(prevHeight) - 10) + "px");
        setNoBttnWidth((prevWidth) => (parseInt(prevWidth) - 10) + "px");
        setYesBttnHeight((prevHeight) => (parseInt(prevHeight) + 20) + "px");
        setYesBttnWidth((prevWidth) => (parseInt(prevWidth) + 20) + "px");
        setnobttnclick((prevClick) => prevClick + 1);
        setLeft_val((prevLeft_val) => `${parseInt(prevLeft_val) - 5}px`);
        setTop_val((prevTop_val) => `${parseInt(prevTop_val) - 5}px`);
        setText(message[nobtntimesclicked]);
    }
    return (
        <div id="main_layout">
             <p>Created by Legiaminh</p>
            <div id="label_layout">
                <h1>Do you want to be my girlfriend?</h1>
                <img src={question_gif} id="question_ask_id" alt="Question" />
            </div>
            <div id="buttons_group">
                <button
                    id="button_yes"
                    className="buttonW"
                    style={{ height: yesBttnHeight, width: yesBttnWidth , top : top_val , left : left_val }}
                    onClick={navigateToThanks}
                >
                    Yes
                </button>
                <button
                    id="button_no"
                    className="buttonW"
                    style={{ height: noBttnHeight, width: noBttnWidth }}
                    onClick={handleNoButtonClick}
                    text={text}
                >
                    No
                </button>
            </div>
        </div>
    );
}

export default Main_page;
