import { useEffect, useRef } from "react"

export const DomRef = () => {

    const refValue = useRef<HTMLInputElement>(null!)
  
    useEffect(()=>{
        refValue.current?.focus()
    },[])
  return (
    <div>
        <input ref={refValue} type='text'/>
    </div>
  )
}
