import React, { useState, useEffect } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationExp from './components/EducationExp';
import WorkExp from './components/WorkExp';
import Skills from './components/Skills';
import arrow from './img/Arrow-To-icon.png';
import './App.css';

function App() {
  const [editState, setEditState] = useState('false');

  const toggleMoreFeatures = () => {
    let state = editState;
    if (state === 'false') {
      state = 'true';
    } else {
      state = 'false';
    }
    setEditState(state);
  }

  useEffect(() => {
    const addButts = document.querySelectorAll('.add');
    const removeButts = document.querySelectorAll('.remove');

    if (editState === 'false') {
      addButts.forEarch((button) => button.className = 'add hidden');
      removeButts.forEach((button) => button.className = 'remove hidden');
    } else {
      addButts.forEarch((button) => button.className = 'add');
      removeButts.forEach((button) => button.className = 'remove');
    }
  }, [editState]);

  return (
    <div className='app'>
      <div className='edit-wrapper'>
        <button className='edit-button' onClick={toggleMoreFeatures}>
          <div className='square-icon' />
        </button>
        <div className='tutorial'>
          <img className='arrow' src={arrow} alt='arrow'></img> Click this button to reveal more edit features
        </div>
      </div>
      <div className='cv'>
        <GeneralInfo />
        <div className='info'>
          <div className='left-side'>
            <EducationExp />
            <Skills />
          </div>
          <hr></hr>
          <WorkExp />
        </div>
      </div>
    </div>
    );

}

export default App;