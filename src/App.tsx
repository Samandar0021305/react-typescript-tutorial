import React from 'react';
import './App.css';
import { Counter } from './components/class/Counter';
import { Box } from './components/context/Box';
import { THemeCOntextProvider } from './components/context/ThemeContext';
function App() {

  // const personName= {
  //   first:"Brown",
  //   last:"Brusel"
  // }

  // const nameList = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Kent'
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana'
  //   }
  // ]


  return (
    <div className="App">
        <Counter message='welcome to my channel'/>
    </div>
  );
}

export default App;
