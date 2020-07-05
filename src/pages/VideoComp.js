import React, { useContext, useEffect } from 'react';
import LangContext from "../LangContext";
import architectsVid from '../assets/transitions/architectsVid.mp4';
import dimitryVid from '../assets/transitions/dimitryVid.mp4';
import gurdVid from '../assets/transitions/dimitryVid.mp4';
import pilgremVid from '../assets/transitions/dimitryVid.mp4';
import '../App.css';


function VideoComp({ playVideoLogic, typeFigure }) {

  const { lang } = useContext(LangContext);


  useEffect(

    () => {

    }, []);

  function isLeftToRight() {
    if (lang === "hebrew") {
      return false;
    } else {
      return true;
    }
  }
  function chooseVideo() {
    switch (typeFigure) {
      case 'dimitry':
        return dimitryVid;
      case 'gurd':
        return gurdVid;
      case 'pilgrem':
        return pilgremVid;
      case 'architects':
        return architectsVid;
      default:
        return dimitryVid;
    }
  }

  return (

    <video onClick={playVideoLogic} src={dimitryVid} id='zoomInVideo' className='fullBackground video-position' />
  );
}

export default VideoComp;
