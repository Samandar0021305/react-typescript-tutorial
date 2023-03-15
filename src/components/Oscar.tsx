import React from 'react'
type OscarProp = {
    children:React.ReactNode
}

export const Oscar = (props:OscarProp) => {
  return (
    <div>{props.children}</div>
  )
}
