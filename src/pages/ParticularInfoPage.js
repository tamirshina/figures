import React, { useContext, useState, useEffect } from 'react';
import { timer, removeTimer } from '../fragments/TimerHundler';
import architectsBack from '../assets/backgrounds/architects.png';
import dimitryBack from '../assets/backgrounds/dimitry.png';
import gurdBack from '../assets/backgrounds/gurd.png';
import pilgramBack from '../assets/backgrounds/pilgram.png';
import LangContext from "../LangContext";
import hebrewText from '../textHandler/HebrewText';
import englishText from '../textHandler/EnglishText';
import russianText from '../textHandler/RussianText';
import TextInserter from '../textHandler/TextInserter';
import '../App.css';

function ParticularInfoPage({ backBtnLogic, homeBtnLogic, typeOfParticularInfo }) {

  const lang = useContext(LangContext).lang;

  function isLeftToRight() {
    if (lang === "hebrew") {
      return false;
    } else {
      return true;
    }
  }

  useEffect(
    () => {
      timer(homeBtnLogic);
      return () => {
        removeTimer();
      };

    }, [homeBtnLogic]);

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

  function backgroundToRender() {

    switch (typeOfParticularInfo) {
      case 'architects':
        return architectsBack;
      case 'dimitry':
        return dimitryBack;
      case 'gurd':
        return gurdBack;
      case 'pilgram':
        return pilgramBack;
      default:
        return pilgramBack;
    }
  }

  return (
    <>
      <img src={backgroundToRender()} alt='backgroundImage' className='fullBackground' />
      <TextInserter homeBtnLogic={homeBtnLogic} typeOfParticularInfo={typeOfParticularInfo} />
    </>
  );

}

export default ParticularInfoPage;
