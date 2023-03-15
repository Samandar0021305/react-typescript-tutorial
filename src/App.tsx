import React from 'react';
import './App.css';
import { Button } from './components/Button';
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
          <Button handleClick={(event)=>{
            console.log("hello world",event);
            
          }}/>     

          <Input value='' handleChange={(event)=>console.log(event)} />
    </div>
  );
}

export default App;
