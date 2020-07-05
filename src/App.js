import React, { useState } from 'react';
import FrontPage from './pages/FrontPage';
import HomeBtn from './fragments/HomeBtn';
import LanguageBiv from './fragments/LanguageButtons'
import './App.css';
import ParticularInfoPage from './pages/ParticularInfoPage';
import VideoComp from './pages/VideoComp';
import architectsVid from './assets/transitions/architectsVid.mp4';
import dimitryVid from './assets/transitions/dimitryVid.mp4';
import gurdVid from './assets/transitions/gurdVid.mp4';
import pilgremVid from './assets/transitions/pilgramVid.mp4';
// import dimitryVid from './assets/newTransition/dimitryVid.mp4';
// import gurdVid from './assets/newTransition/guard-transion03.mp4';
// import pilgremVid from './assets/newTransition/Abraham-transion03.mp4';
// import architectsVid from './assets/newTransition/Architects-transion03.mp4';

function App() {

  const [isFrontPage, setIstFrontPage] = useState(true);
  const [typeOfParticularInfo, setTypeOfParticularInfo] = useState('dimitry');
  const [isParticularInfoPage, setIsParticularInfoPage] = useState(false);

  const homeBtn = () => {
    setIstFrontPage(true);
    setTimeout(function () {
      setIsParticularInfoPage(false);
    }, 300);
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
      {isFrontPage && <FrontPage moveToParticularInfo={moveToParticularInfo} />}
      {isParticularInfoPage && <ParticularInfoPage typeOfParticularInfo={typeOfParticularInfo} />}
      <VideoComp />
      <LanguageBiv />
      {!isFrontPage && <HomeBtn homeBtnLogic={homeBtn} />}
    </>
  );
}

export default App;
