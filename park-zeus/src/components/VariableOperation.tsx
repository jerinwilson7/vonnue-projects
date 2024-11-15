import React, { useState } from "react"
import { VariableType } from "../types/variableTypes"
import EquationOperator from "./EquationOperator"


type VariableOperationPropsType = {
  variables:VariableType[]
  onHandleChange:(id:number)=>void
  onHandleOperatorChange:(operator:string,index:number)=>void
  removeVariableOperation:()=>void
  index:number
}

function VariableOperation({variables,onHandleChange,onHandleOperatorChange,removeVariableOperation,index}:VariableOperationPropsType) {
  const [selectedOption, setselectedOption] = useState<number | ''>('')

   

  const handleSelectedOption = (e:React.ChangeEvent<HTMLSelectElement>)=>{
   const selectedId = Number(e.target.value)
    setselectedOption(selectedId)

    onHandleChange(selectedId)

  }



  return (
    <div className="variable-operation">
        
            <select className="variable-select"
              value={selectedOption}
              onChange={handleSelectedOption}>   
            <option value=""></option>      
            {variables.map((variable) => (

          <option value={variable.id}  key={variable.id}>
            {variable.name}
          </option>
        ))}
            </select>

          {selectedOption != '' && <EquationOperator 
           onHandleOperatorChange={onHandleOperatorChange}
            removeVariable = {removeVariableOperation}
            index={index}
            />
             }
        </div>
  )
}

export default VariableOperation


