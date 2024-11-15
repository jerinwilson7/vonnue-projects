import { useQuiz } from "../contexts/QuizContext"



export const Option = () => {

    const {questions,index,answer,dispatch} = useQuiz()

    const question = questions[index]

    const hasAnswered = answer !== null

  return (
    <div className="options">
        {question.options.map((option,index)=>
            <button key={option} 
            disabled= {hasAnswered}
            onClick={()=>dispatch({type:"NEW_ANSWER",payload:index})}
            className={`btn btn-option
             ${index === answer ? 'answer' : ''}
             ${hasAnswered ?
                index === question.correctOption ? 'correct' : 'wrong'
                :''
            }
            
             `}>
                {option}
            </button>
        )}
    </div>
  )
}
