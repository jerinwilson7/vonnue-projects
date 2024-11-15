import React from "react"
import { variables } from "../assets/data/initialData"
import EquationOperator from "./EquationOperator"

type VariableOperationType = {
    addVariableOperations:()=>void
    selectedVariable :number
    handleChange:(variable:number)=>void
  
}

function VariableOperation({addVariableOperations,handleChange,selectedVariable}:VariableOperationType) {
   


    const onHandleChange =(e:React.ChangeEvent<HTMLSelectElement>)=>{
       const variable =Number(e.target.value)
       handleChange(variable)
    }


  return (
    <div className="variable-operation">
        
            <select className="variable-select" onChange={onHandleChange}>   
            <option value=""></option>      
            {variables.map((variable) => (

          <option value={variable.id}  key={variable.id}>
            {variable.name}
          </option>
        ))}
            </select>

           {/* {selectedVariable && <EquationOperator
            addVariableOperations={addVariableOperations} 
           
            /> 
            } */}

            {selectedVariable ? <EquationOperator addVariableOperations={addVariableOperations} /> : ''}
        </div>
  )
}

export default VariableOperation


