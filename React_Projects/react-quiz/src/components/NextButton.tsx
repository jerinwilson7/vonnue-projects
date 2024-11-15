import { useQuiz } from "../contexts/QuizContext"

export const NextButton = () => {

  const {answer,numQuestions,index,dispatch} = useQuiz()

    if(answer === null) return null

    if(index < numQuestions -1) return (
    <button
    className="btn btn-ui"
    onClick={()=>dispatch({type:"NEXT_QUESTION",})}
    >
        Next
    </button>
  )
    if(index === numQuestions -1) return (
    <button
    className="btn btn-ui"
    onClick={()=>dispatch({type:"FINISHED",})}
    >
        Finish
    </button>
  )
}


//jnkj