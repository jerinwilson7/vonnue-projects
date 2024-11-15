
import { useState } from 'react'
import './App.css'
import FormAddVariable from './components/FormAddVariable'
import { Initialvariables } from './assets/data/initialData'
import { VariableType } from './types/variableTypes'

function App() {
  const [isopen, setIsOpen] = useState(true)
  const [variables, setVariables] = useState(Initialvariables)

  const handleSetVariableUpdate = (newVariableData:VariableType)=>{
    console.log('first')
    setVariables(prevVariables=>[...prevVariables,newVariableData])
  }

  return (
    <div className='app'>

    <div className='edit-box'>
      <div className='edit-container'>

       {isopen &&<FormAddVariable variables={variables} onVariableUpdate = {handleSetVariableUpdate}/>}
      {isopen && <button className="close" onClick={()=>setIsOpen((is)=>!is)}>
        &times;
        </button>}
      </div>
    </div>

    </div>
  )
}

export default App





// import { useState } from 'react'
// import './App.css'
// import FormAddVariable from './components/FormAddVariable'
// import { Initialvariables } from './assets/data/initialData'
// import { VariableType } from './types/variableTypes'

// function App() {
//   const [isopen, setIsOpen] = useState(true)
//   const [variables, setVariables] = useState(Initialvariables)

//   const handleSetVariableUpdate = (newVariableData:VariableType)=>{
//     console.log('first')
//     setVariables(prevVariables=>[...prevVariables,newVariableData])
//   }

//   return (
//     <div className='app'>

//     <div className='edit-box'>
//       <div className='edit-container'>

//        {isopen &&<FormAddVariable variables={variables} onVariableUpdate = {handleSetVariableUpdate}/>}
//       {isopen && <button className="close" onClick={()=>setIsOpen((is)=>!is)}>
//         &times;
//         </button>}
//       </div>
//     </div>

//     </div>
//   )
// }

// export default App
