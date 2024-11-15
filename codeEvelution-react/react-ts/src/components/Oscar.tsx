import React from "react"

type OscarTypes = {
    children:React.ReactNode
}


export const Oscar = (props:OscarTypes) => {
  return (
    <div>{props.children}</div>
  )
}
