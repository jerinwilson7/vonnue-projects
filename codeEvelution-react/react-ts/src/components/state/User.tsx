import { useState } from "react"

type AuthUser = {
    name:string,
    email:string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin=()=>{
        setUser({
            name:'jerin',
            email:'jerinwilson@gmail.com'
        })
    }

    
    
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <div>user name is {user.name}</div>
        <div>user email is {user.email}</div>
    </div>
  )
}
// dfsdflkdlkcvm or auth user before accessing the propertyxczczxc zxc break it  any of your react project  now 