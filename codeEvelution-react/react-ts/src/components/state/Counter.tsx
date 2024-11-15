import { useReducer } from "react"

type CounterState = {
    count:number
}

type UpdateAction = {
    type: 'increment' | 'decrement';
    payload:number
}

type ResetAction = {
    type : "reset"
}

type CounterAction=UpdateAction | ResetAction

const initalState = {count:0}

const reducer = (state :CounterState,action:CounterAction)=>{
    switch(action.type){
        case 'increment':
            return {count:state.count + action.payload};
        case 'decrement':
            return {count:state.count - action.payload};  
        case 'reset':
            return {...initalState}      
        default:
         return state    
    }
}

export const Counter = () => {
    const [state,displatch] = useReducer(reducer,initalState)
  return (
    <>
    count:{state.count}
    <button onClick={()=>displatch({type:'increment',payload:10})}>Increment 10</button>

    <button onClick={()=>displatch({type:'decrement',payload:10})}>Decrement 10</button>


    <button onClick={()=>displatch({type:'reset'})}>Reset</button>


    </>
  )
}

// sflmsffssdftyping the context api