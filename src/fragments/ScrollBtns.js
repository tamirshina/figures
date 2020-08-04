import React from "react";
import scrollUpImg from "../assets/11-up-arrow.png";
import scrollDwonImg from "../assets/02-down-arrow.png";
import "../App.css";

function ScrollingBtn({ scrollDown, scrollUp, typeOfParticularInfo }) {

    function isDimitry() {
        if (typeOfParticularInfo === "dimitry" || typeOfParticularInfo === "gurd") {
            return true;
        } else {
            return false;
        }
    }


    return (
        <div className={isDimitry() ? "scroll-button-dimitry" : "scroll-button-architects"} >
            <img
                src={scrollUpImg}
                alt="scroll-up"
                onClick={scrollUp}
                className={"left-scroll"}
            />
            <img src={scrollDwonImg} alt="scroll-up" onClick={scrollDown} />
        </ div>
    );
}

export default ScrollingBtn;
