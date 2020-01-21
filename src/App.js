import React, { useState } from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'
import QuizContainer  from './QuizContainer'
import Landscape from './img/landscape.png'


function App() {
  const [isButtonClick, setButtonVariable] = useState(false);
  const handleClick = () => {
    setButtonVariable(true)
  }
    return (
    <div className="App">
      <h1 className="Header">Carbon FoodPrint</h1>

      { isButtonClick ? null : <h2> Take this quiz to find out your diet's carbon foodprint!</h2>}

      { isButtonClick ? <QuizContainer/> : <Button onClick={handleClick}> Let's Begin </Button>}

      <img src={Landscape} style={{height: '300px'}}/>

    </div>
  );
}

export default App;
