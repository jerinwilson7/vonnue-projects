

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

type EquationOperatorPropsType = {
  onHandleOperatorChange:(operator:string,index:number)=>void
  removeVariable:()=>void
  index:number
}


function EquationOperator({onHandleOperatorChange,removeVariable,index}:EquationOperatorPropsType) {
  const [selectedOperator, setselectedOperator] = useState('select')




const handleOperatorChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
  const operator = e.target.value
  setselectedOperator(operator)

  if(operator != 'select'){
    onHandleOperatorChange(operator,index)
   
  }
}

 const handleRemove = ()=>{
  removeVariable()
 }

  return (
    <div className="equation-operator">
      <select value={selectedOperator} onChange={handleOperatorChange}>
        <option value="select">Select...</option>
        <option value="ADDITION">+</option>
        <option value="SUBSTRACTION">-</option>
      </select>
      <FontAwesomeIcon icon={faTrash} color={'red'} onClick={handleRemove} />

    </div>
  );
}

export default EquationOperator;
