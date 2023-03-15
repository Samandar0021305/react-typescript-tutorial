import React from 'react'
type GreetProps = {
    name:string,
    messageCount:number,
    isLogged:boolean
}

export const Greet = (props:GreetProps) => {
  return (
    <div>
        {props.isLogged ? <h1>Welcome {props.name}! You have {props.messageCount} unread message</h1> : <h1>message great</h1>}
    </div>
  )
}
