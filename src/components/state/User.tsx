import {useState} from 'react'
type state={
    name:string,
    gmail:string
}

export const User = () => {
  const [user,setUser] = useState<state | null>(null)  
   const handleLogin = ()=>{
     setUser({
        name:"Vishvas",
        gmail:"vishvas@gmail.com"
     })
   }

   const handleLoginout = ()=>{
    setUser(null)
   }

return (
    <div>
        <button onClick={handleLogin}>login</button>
        <button onClick={handleLoginout}>logout</button>
        <h1>name is {user?.name}</h1>
        <h1>gmail is {user?.gmail}</h1>
    </div>
  )
}
