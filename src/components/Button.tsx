import React from 'react'
type ButtonProp = {
 handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}

export const Button = (props:ButtonProp) => {
  return (
    <button onClick={props.handleClick}>submit</button>
  )
}
