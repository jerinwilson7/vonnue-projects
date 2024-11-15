import { VariableType } from "../types/variableTypes";

type OperationTypes = {
    variableName : string
    selectedOptions : VariableType[]
}


function Operation({variableName,selectedOptions}:OperationTypes) {
    
    const formatOptions = ()=>{
        return selectedOptions.map(option=>option.name)
    }
  return (
    <div>
        { variableName &&
            <p>{variableName} = {formatOptions()} </p>
            }
    </div>
  );
}

export default Operation;
