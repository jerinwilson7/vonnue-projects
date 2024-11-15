
import { VariableType } from "../types/variableTypes";



type OperationPropsTypes = {
  expressionName : string
  variables:VariableType[]
  variableOperation:{id:number,operator:string}[]
}

function Operation({expressionName,variables,variableOperation}:OperationPropsTypes) {
   


    const formatVariables = ()=>{
      return variableOperation.map(({id,operator})=>{
        const variable =  variables.find(variable=>variable.id === id);

        if(!variable) return;
        let operatorSymbol = '';
        if(operator === 'ADDITION') operatorSymbol = '+'
        if(operator === 'SUBSTRACTION') operatorSymbol = '-'

        return ` ${variable ? variable.name:''} ${operatorSymbol}`

      })
      .join(' ')
      .trim()
    }

  return (
    <div className="operation">
       
            { expressionName && (
              <p>{expressionName} = {formatVariables()}</p>
            )}
    </div>
  );
}

export default Operation;

