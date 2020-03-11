import React from 'react';
import Greeting from './Greeting'
import './App.css';

function App() {
  return (
    <div className='App-header'>
      <h1 className='blueText'>React Class Components</h1>
     <Greeting myName='Mary' sayHello='hello'/>
     </div>
  );
}

export default App;
