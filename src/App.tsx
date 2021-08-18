import React from 'react';
import { useState } from 'react';
import ButtonList from './components/button/buttonlist';
import MainContainer from "./components/main/maincontainer"
import Header from "./components/header/header"
import './App.scss'


function App() {

const [text,setText] = useState("")

  return (
    <div className="appContainer">
      <Header/>
    <ButtonList onClick={setText}/>
    <MainContainer selected={text}/>
  
    </div>
  );
}

export default App;
