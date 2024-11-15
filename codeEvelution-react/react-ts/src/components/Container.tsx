import React from "react"

type ContainerPropsType = {
    styles:React.CSSProperties
}


export const Container = (props:ContainerPropsType) => {
  return (
    <div style={props.styles}>
        Text content goes here
    </div>
  )
}
