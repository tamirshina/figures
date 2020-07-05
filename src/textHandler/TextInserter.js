import React, { useContext, useRef, useEffect, useState } from "react";
import LangContext from "../LangContext";
import russianText from "./RussianText";
import englishText from "./EnglishText";
import hebrewText from "./HebrewText";
import ScrollBtns from '../fragments/ScrollBtns';
import { timer, removeTimer } from '../fragments/TimerHundler';
import "../App.css";

function TextInserter({ homeBtnLogic, typeOfParticularInfo }) {

  const lang = useContext(LangContext).lang;
  const textParaEl = useRef(null);

  const [isRightToLeft, setIsRightToLeft] = useState(false);
  const [isScrollBtn, setIsScrollBtn] = useState(true);

  useEffect(() => {
    if (lang === "hebrew") {
      setIsRightToLeft(true);
    } else {
      setIsRightToLeft(false);
    }
    if (typeOfParticularInfo === 'gurd' || typeOfParticularInfo === 'pilgram' || (isRightToLeft === true && typeOfParticularInfo !== 'architects')) {
      setIsScrollBtn(false);
    }
  }, [lang, typeOfParticularInfo, isRightToLeft]);

  function resetTimer() {
    removeTimer();
    timer(homeBtnLogic);
  }

  function createMarkup(str) {
    return { __html: str };
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

  function infoToInsert() {
    return whichFileToUse().particularInfo[typeOfParticularInfo];
  }

  const scrollAndUpdateDown = () => {

    resetTimer();
    textParaEl.current.scrollTop += 10;
  }

  const scrollAndUpdateUp = () => {

    textParaEl.current.scrollTop -= 10;
  }

  return (
    <>
      <div ref={textParaEl} id="particularText" className={"particular-main-container"} style={infoToInsert().css}>
        <div className={isRightToLeft ? 'particular-text-heb' : undefined}>
          <h1 className='particular-title' dangerouslySetInnerHTML={createMarkup(infoToInsert().title)} />
          <div className={isRightToLeft ? "heb-side-shape" : "side-shape"}></div>
          <p
            id="particularTextBox"
            dangerouslySetInnerHTML={createMarkup(infoToInsert().info)}
          ></p>
        </div>
      </div>
      {isScrollBtn && <ScrollBtns scrollDown={scrollAndUpdateDown} scrollUp={scrollAndUpdateUp} typeOfParticularInfo={typeOfParticularInfo} />}
    </>
  );
}

export default TextInserter;
