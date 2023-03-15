import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Input } from './components/Input';

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
          <Container styles={{border:"1px solid red", padding:"1rem"}} />
    </div>
  );
}

export default App;
