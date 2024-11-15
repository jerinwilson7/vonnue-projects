import { useState } from "react";

// type DateType = {
//     date:date
// }

function Counter() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setStep(Number(e.target.value))
  }
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setCount(Number(e.target.value))
  }

  const handleReset = () =>{
    setCount(0);
    setStep(1)
  }

  return (
    <div>
      <div>
        <input type="range" min='0' max='10' value={step} onChange={handleChange} />
        <p>vlaue: {step}</p>
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input type="tex" value={count} onChange={handleInputChange} />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count == 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      
      {count !==0 || step !==1 ? (<div>

      <button onClick={handleReset}>Reset</button>
      </div>):
      (null)
      }
    </div>
  );
}

export default Counter;
