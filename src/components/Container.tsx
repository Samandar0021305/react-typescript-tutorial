import React from 'react'

type ContaionerProps = {
    styles : React.CSSProperties
}

export const Container = (props:ContaionerProps) => {
  return (
    <div style={props.styles}>
        <h1>hello</h1>
    </div>
  )
}
