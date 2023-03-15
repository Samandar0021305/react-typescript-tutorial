import React,{Component} from "react";

type CounterProps = {
  message:string
}

type CounterState = {
    count:number
}

export class Counter extends Component< CounterProps , CounterState>{
     state = {
        count:0,
     }

      handleClcik = ()=>{
        this.setState((prev)=>({count:prev.count+1}))
     }
        
     render() {
         return (
            <div>
                  <button onClick={this.handleClcik}> increment</button>
                  {this.props.message} {this.state.count}  
            </div>
         )
     }
} 