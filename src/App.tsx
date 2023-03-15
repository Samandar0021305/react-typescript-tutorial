import React from 'react';
import './App.css';
import { User } from './components/state/User';

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
        <User/>
    </div>
  );
}

export default App;
