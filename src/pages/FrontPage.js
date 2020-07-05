/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect } from "react";
import hebrewText from '../textHandler/HebrewText';
import englishText from '../textHandler/EnglishText';
import russianText from '../textHandler/RussianText';
import frontPageBackground from '../assets/frontPage/backgroundOnly.png';
import downFrame from '../assets/frame_down.png';
import rightFrame from '../assets/frame_right.png';
import leftFrame from '../assets/frame_left.png';
import LangContext from "../LangContext";
import "../App.css";

function FrontPage({ moveToParticularInfo }) {

    const { lang } = useContext(LangContext);

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
            <img src={downFrame} alt='downFrame' className='down-frame-position' />
            <img src={rightFrame} alt='rightFrame' className='right-frame-position' />
            <img src={leftFrame} alt='leftFrame' className='left-frame-position' />
            {whichFileToUse().frontPage.map((item) => {
                return (

                    <div key={item.name} >
                        <div className='front-page-titles' style={item.titleStyle} onClick={moveToParticularInfo}>
                            <div className='particular-title'>{item.title}</div>
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
