import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const handleLogin=()=>{
        setIsLoggedIn(true)
        console.log(isLoggedIn)
    }
    const handleLogout=()=>{
        setIsLoggedIn(false)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {isLoggedIn ? 'logged in':'logged out'} </div>
    </div>
  )
}


// djfkds sert state jksdfj use state hook more comples ldgm infer