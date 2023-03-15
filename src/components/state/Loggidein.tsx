import  { useState } from 'react'

export const Loggidein = () => {
    const [isLoggdin,setIsLoggdin] = useState(false)
    const handleLogin = ()=>{
        setIsLoggdin(true)
    }
    const handleLogout = ()=>{
        setIsLoggdin(false)
    }
  return (
    <div>
       <button onClick={handleLogin}>Login</button>
       <button onClick={handleLogout}>Logout</button> 
       <h1>User is {isLoggdin ? "logged in" : " logged out" }</h1>
    </div>
  )
}
