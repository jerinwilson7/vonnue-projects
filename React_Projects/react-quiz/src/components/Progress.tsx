import { useQuiz } from "../contexts/QuizContext";


export const Progress = () => {

  const {index,answer,maxPoints,numQuestions,points} = useQuiz()

  return (
    <header className="progress">

        <progress max={numQuestions} value={index + Number(answer !== null)}/>

        <p>Question <strong>{index+1}</strong> / {numQuestions}</p>
        <p><strong>{points}</strong> / {maxPoints}</p>
    </header>
  )
}

