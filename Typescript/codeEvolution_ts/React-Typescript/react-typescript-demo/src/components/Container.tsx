type ContainerProps = {
    styles:React.CSSProperties
}

function Container(props:ContainerProps) {
  return (
    <div style={props.styles}>
        TExt goes here
    </div>
  )
}

export default Container