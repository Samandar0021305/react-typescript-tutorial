import React from 'react'
type myPersonName = {
    name:{
        first:string,
        last:string
    }
}



export const Person = (props:myPersonName) => {
  return (
    <div>
      <h1>{props.name.first} {props.name.last}</h1>
    </div>
  )
}
