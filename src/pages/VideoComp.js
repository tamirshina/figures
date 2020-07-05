import React from 'react';
import dimitryVid from '../assets/transitions/dimitryVid.mp4';
import '../App.css';

function VideoComp({ playVideoLogic }) {

  return (

    <video onClick={playVideoLogic} src={dimitryVid} id='zoomInVideo' className='fullBackground video-position' />
  );
}

export default VideoComp;
