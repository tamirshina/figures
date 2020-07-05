import React, { useContext, useEffect } from 'react';
import { timer, removeTimer } from '../fragments/TimerHundler';
import architectsBack from '../assets/backgrounds/architects.png';
import dimitryBack from '../assets/backgrounds/dimitry.png';
import gurdBack from '../assets/backgrounds/gurd.png';
import pilgramBack from '../assets/backgrounds/pilgram.png';
import TextInserter from '../textHandler/TextInserter';
import '../App.css';

function ParticularInfoPage({ homeBtnLogic, typeOfParticularInfo }) {

  useEffect(
    () => {
      timer(homeBtnLogic);
      return () => {
        removeTimer();
      };

    }, [homeBtnLogic]);

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
