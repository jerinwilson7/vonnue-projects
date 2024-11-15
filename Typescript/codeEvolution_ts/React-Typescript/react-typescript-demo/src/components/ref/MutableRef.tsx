import { useEffect, useRef, useState } from "react"

function MutableRef() {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef(null)

    const stopTimer =() =>{
        Window.clearInterval(interValRef.current)
    }

    useEffect(() => {
        interValRef.current = Window.setInterval(()=>{
            setTimer((timer)=>timer + 1)
        },1000)
    
      return () => {
        stopTimer();
      }
    }, [])
    
  return (
    <div>
        HookTimer - {timer} -
        <button onClick={()=> stopTimer()}>Stop Timer</button>
    </div>
  )
}

export default MutableRef