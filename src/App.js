import React, { useState } from 'react';
import FrontPage from './pages/FrontPage';
import HomeBtn from './fragments/HomeBtn';
import LanguageBiv from './fragments/LanguageButtons'
import './App.css';
import ParticularInfoPage from './pages/ParticularInfoPage';
import VideoComp from './pages/VideoComp';

function App() {

  const [isFrontPage, setIstFrontPage] = useState(true);
  const [isAnimation, setIsAnimation] = useState(false);
  const [typeOfParticularInfo, setTypeOfParticularInfo] = useState();
  const [isParticularInfoPage, setIsParticularInfoPage] = useState(false);

  const homeBtn = () => {
    setIstFrontPage(true);
    setIsParticularInfoPage(false);
  };

  const moveToParticularInfo = (e) => {

    if (e) {
      setTypeOfParticularInfo(e.currentTarget.id);
      setIsParticularInfoPage(true);
      setIstFrontPage(false)
    }
  }

  const playVideo = () => {

    const videoElem = document.getElementById('zoomInVideo');
    const textParaEl = document.getElementById('frontBox');
    if (videoElem) {
      videoElem.play();
      videoElem.onplay = (event) => {
        if (textParaEl) {
          textParaEl.classList.add('fade')
        }
        setTimeout(function () {
          setIsTextInsert(false);
        }, 2000);
        setTimeout(function () { setIsInfoRouting(true); }, 3500);
        setIsShowButtons(false);

      }
      videoElem.onended = (event) => {
        setIsFrontPage(false);
        setIsTextInsert(false);
        setIsShowButtons(true);
      };
    }
  }


  return (
    <>
      {isFrontPage && <FrontPage moveToParticularInfo={moveToParticularInfo} />}
      {isParticularInfoPage && <ParticularInfoPage typeOfParticularInfo={typeOfParticularInfo} />}
      {isAnimation && <VideoComp />}
      <LanguageBiv />
      {!isFrontPage && <HomeBtn homeBtnLogic={homeBtn} />}
    </>
  );
}

export default App;
