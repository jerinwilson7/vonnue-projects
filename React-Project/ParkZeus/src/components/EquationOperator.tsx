

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import VariableOperation from "./VariableOperation";

type EquationOperatornType = {
    addVariableOperations:()=>void
  

}


function EquationOperator({addVariableOperations}:EquationOperatornType) {
  const [selectedOperator, setSelectedOperator] = useState('select');

  const handleOperatorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value:string = e.target.value
    setSelectedOperator(value)
    // setSelectedOperator(prevOperators=>[...prevOperators,value])
    if(value != 'select'){
        addVariableOperations();
    }
  };

  return (
    <div className="equation-operator">
      <select value={selectedOperator} onChange={handleOperatorChange}>
        <option value="select">Select...</option>
        <option value="add">+</option>
        <option value="subtract">-</option>
      </select>
      <FontAwesomeIcon icon={faTrash} color={'red'} />

      {/* {selectedOperator !== 'select' && <VariableOperation />} */}
    </div>
  );
}

export default EquationOperator;
