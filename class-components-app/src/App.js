import React from 'react';
import Greeting from './Greeting'
import './App.css';
import ClassRoom from './components/ClassRoom'

function App() {
  return (
    <div className='App-header'>
      <h1 className='blueText'>React Class Components</h1>
      <ClassRoom classRoomName='Code School'cohort='Spring 2020'/>
     </div>
  );
}

export default App;
