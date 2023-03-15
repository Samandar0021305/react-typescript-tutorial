import React from 'react';
import './App.css';
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
        <THemeCOntextProvider>
          <Box/>
        </THemeCOntextProvider>
    </div>
  );
}

export default App;
