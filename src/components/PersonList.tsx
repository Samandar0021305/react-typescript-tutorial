import React from 'react'

type PersonListProps = {
    names:{
        first:string,
        last:string
    }[]
}

export const PersonList = (props:PersonListProps) => {
  return (
    <div>
          {props.names.map((value,index)=>{
            return <h1 key={index}>{value.first} {value.last}</h1>
          })}
    </div>
  )
}
