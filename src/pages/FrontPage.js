/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect } from "react";
import hebrewText from '../textHandler/HebrewText';
import englishText from '../textHandler/EnglishText';
import russianText from '../textHandler/RussianText';
import frontBackground from "../assets/02-background-pic.png";
import LangContext from "../LangContext";
import "../App.css";

function FrontPage({ moveToParticularInfo }) {

    const { lang } = useContext(LangContext);

    function isLeftToRight() {
        if (lang === "hebrew") {
            return false;
        } else {
            return true;
        }
    }

    function whichFileToUse() {
        if (lang === "hebrew") {
            return hebrewText;
        }
        if (lang === "english") {
            return englishText;
        } else {
            return russianText;
        }
    }
    return (
        <>
            {whichFileToUse().titleBox.map((item) => {
                return (

                    <div>
                        <div style={item.titleStyle}>
                            <div>title</div>
                        </div>
                        <img src={item.picSrc} key={item.name} id={item.name} onClick={moveToParticularInfo} className={'general-kapostin-container'} style={item.css} />
                    </div>

                );
            })}
        </>
    );
}

export default FrontPage;
