import React from 'react';
import './App.css';

function Greeting(prop) {
    
  return (
    <div className = 'purpleText'>
     <h2>Why {prop.sayHello} there {prop.myName}!</h2>
    </div>
  );
}

export default Greeting;
