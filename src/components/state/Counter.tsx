import {useReducer} from 'react'

type IniatlStateType ={
    count:number
} 

type ActionType = {
    type:'inc' | 'dec',
    payload:number
}

type resteAction = {
    type:"res"
}
type upditeActons = ActionType | resteAction

const initalState = {
    count:0
}

function reducer(state:IniatlStateType,action:upditeActons){
  switch(action.type){
    case "inc":
        return {count:state.count + action.payload};
    case 'dec':
        return {count:state.count - action.payload};
    case 'res':
        return initalState
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
        <button onClick={()=>dispatch({type:'res'})}>reset</button>
    </div>
  )
}
