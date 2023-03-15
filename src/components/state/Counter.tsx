import {useReducer} from 'react'

type IniatlStateType ={
    count:number
} 

type ActionType = {
    type:string,
    payload:number
}

const initalState = {
    count:0
}

function reducer(state:IniatlStateType,action:ActionType){
  switch(action.type){
    case "inc":
        return {count:state.count + action.payload};
    case 'dec':
        return {count:state.count - action.payload};
    default :
    return state
  }
}

export const Counter = () => {

    const [counter,dispatch] = useReducer(reducer,initalState)
  return (
    <div>
        <h1>count - {counter.count}</h1>
        <button onClick={()=>dispatch({type:"inc",payload:10})}>increment</button>
        <button onClick={()=>dispatch({type:"dec",payload:10})}>decrement</button>
    </div>
  )
}
