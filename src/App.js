import React, { useState, useEffect } from 'react';
import FrontPage from './pages/FrontPage';
import HomeBtn from './fragments/HomeBtn';
import LanguageBiv from './fragments/LanguageButtons';
import errorImg from './assets/errorImg.png';
import './App.css';
import ParticularInfoPage from './pages/ParticularInfoPage';
import VideoComp from './pages/VideoComp';
import architectsVid from './assets/transitions/architectsVid.mp4';
import dimitryVid from './assets/transitions/dimitryVid.mp4';
import gurdVid from './assets/transitions/gurdVid.mp4';
import pilgremVid from './assets/transitions/pilgramVid.mp4';

function App() {

  const [isFrontPage, setIstFrontPage] = useState(true);
  const [typeOfParticularInfo, setTypeOfParticularInfo] = useState('dimitry');
  const [isParticularInfoPage, setIsParticularInfoPage] = useState(false);

  useEffect(() => {

    window.addEventListener("contextmenu", blockContextMenu);

  }, []);

  const blockContextMenu = (evt) => {
    evt.preventDefault();
  };

  const homeBtn = () => {
    setIsParticularInfoPage(false);
    setIstFrontPage(true);
  };

  function chooseVideo(typeFigure) {
    switch (typeFigure) {
      case 'dimitry':
        return dimitryVid;
      case 'gurd':
        return gurdVid;
      case 'pilgram':
        return pilgremVid;
      case 'architects':
        return architectsVid;
      default:
        return dimitryVid;
    }
  }

  const moveToParticularInfo = (e) => {

    let vid = chooseVideo(e.currentTarget.id);

    if (e) {
      setTypeOfParticularInfo(e.currentTarget.id);
      let els = document.getElementsByClassName('front-box-class');

      Array.prototype.forEach.call(els, function (el) {
        el.classList.add('fade')
      });

      playVideo(vid);
      setTimeout(function () {
        setIstFrontPage(false)
      }, 100);
    }
  }



  const playVideo = (typeVideo) => {

    const videoElem = document.getElementById('zoomInVideo');
    videoElem.src = typeVideo;

    if (videoElem) {
      videoElem.play();
      videoElem.onplay = (event) => {
      }
      videoElem.onended = (event) => {
        setIsParticularInfoPage(true);
      };
    }
  }

  return (
    <>
      <div>
        {isFrontPage && <FrontPage moveToParticularInfo={moveToParticularInfo} />}
        {isParticularInfoPage && <ParticularInfoPage typeOfParticularInfo={typeOfParticularInfo} />}
        <VideoComp />
        <LanguageBiv />
        {!isFrontPage && <HomeBtn homeBtnLogic={homeBtn} />}
      </div>
      :
        <img src={errorImg} alt='error' className='full-background' />
    </>
  );
}

export default App;
