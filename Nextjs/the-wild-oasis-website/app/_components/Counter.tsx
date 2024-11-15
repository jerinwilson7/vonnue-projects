"use client"

import React, { useState } from 'react'

type UsersType = {
    users:{

        id: number,
        name: string,
    }[]
    }


function Counter({users}:UsersType) {
    const [count, setCount] = useState(1)
    console.log(users)
  return (
    <div>
        <h1>there are {users.length} users</h1>
        <button onClick={()=>setCount(count+1)}>{count}</button>
    </div>
  )
}

export default Counter

//mk