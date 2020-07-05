/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect } from "react";
import hebrewText from '../textHandler/HebrewText';
import englishText from '../textHandler/EnglishText';
import russianText from '../textHandler/RussianText';
import frontPageBackground from '../assets/frontPage/backgroundOnly.png'
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

    function onClickSon(e) {
        alert(e.currentTarget.id)
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
            <img className='full-background' alt='background' src={frontPageBackground} />
            <div name='transpernt-squre' className='onclick-circle lone-squre' />
            {whichFileToUse().frontPage.map((item) => {
                return (

                    <div key={item.name} >
                        <div className='front-page-titles' style={item.titleStyle}>
                            <div>title</div>
                        </div>
                        <div className='onclick-circle' style={item.circleStyle} />
                        <img src={require(`../assets/frontPage/${item.picSrc}`)} key={item.name} id={item.name} onClick={moveToParticularInfo} className={'front-page-figures'} style={item.css} />
                    </div>

                );
            })}
        </>
    );
}

export default FrontPage;
