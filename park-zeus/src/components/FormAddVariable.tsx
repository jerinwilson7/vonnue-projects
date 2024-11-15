import { useState } from "react";
import Operation from "./Operation";
import VariableOperation from "./VariableOperation";
import { VariableType } from "../types/variableTypes";

type FormAddVariableProps = {
    variables:VariableType[]
    onVariableUpdate:(newVariableData: VariableType) => void
}

function FormAddVariable({variables,onVariableUpdate}:FormAddVariableProps) {

    const [name, setName] = useState('')
    const [variableOperation, setVariableOperation] = useState([{id:0,operator:''}])
   
    

    
    const addVariableOperation = ()=>{
        setVariableOperation([...variableOperation,{id:0,operator:''}])
    }



    const handleChange = (id:number,index:number)=>{

        const updatedOperation = [...variableOperation]
        updatedOperation[index].id = id
        setVariableOperation(updatedOperation)

      

    }

    const handleOperatorChange = (operator:string,index:number)=>{
        const updatedOperation = [...variableOperation];
        console.log('op',updatedOperation[index].operator)
        const wasSelect = updatedOperation[index].operator === ''
        updatedOperation[index].operator = operator;
        setVariableOperation(updatedOperation)
        console.log('index',index)
        console.log('wasSelect',wasSelect)
        console.log('opInc',updatedOperation[index])
        console.log('operator'+operator)

        if(wasSelect && operator !== 'select'){
            addVariableOperation()
        }
    };


    const handleUpdate = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const id = variables.length+1

        const newVariableData:VariableType ={
            id:id,
            name:name,
            type:"Dynamic",
            value:variableOperation.flatMap((operation)=>{
            
                const result = []
                
                result.push({
                    type:'variable',
                    id:operation.id
                });

                if(operation.operator != '') {
                    result.push({
                        type:"operation",
                        operation:operation.operator
                    })
                }
                return result;
            }),
            publish:false,
            computedValue:56
        }

        onVariableUpdate(newVariableData)
        
    }


    const removeVariable = (index:number)=>{
        setVariableOperation(prevOperations=>prevOperations.filter((_,i)=>i !== index))
    }



    return (
        <div className="box">
            <h2>Create Dynamic Variable</h2>

            <form onSubmit={handleUpdate}> 
                <label>Name</label>
                <input className="variable-name" 
                type="text" placeholder="Name"
                 value={name}
                  onChange={(e)=>setName(e.target.value)} />

                <div className="variable-equation">
                    <label>Frame an equation by selecting the variables</label>
                   
                   {variableOperation.map((_,index)=>(

                        <VariableOperation key={index}
                          variables={variables}
                          onHandleChange={(id)=>handleChange(id,index)}
                          onHandleOperatorChange = {(operator)=>handleOperatorChange(operator,index)}
                          removeVariableOperation = {()=>removeVariable(index)}
                          index={index}
                          />
                   ))}

                            
               
                </div>

                <div>
                    <Operation expressionName ={name} variableOperation={variableOperation} variables={variables}/>
                </div>

                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default FormAddVariable;


