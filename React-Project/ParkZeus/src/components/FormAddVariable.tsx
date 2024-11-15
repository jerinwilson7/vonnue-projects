



import { useState } from "react";
import Operation from "./Operation";
import VariableOperation from "./VariableOperation";
import { variables } from "../assets/data/initialData";
import { VariableType } from "../types/variableTypes";

function FormAddVariable() {
    const [name, setName] = useState('');
    const [variableOperation, setVariableOperation] = useState([{}]);
    const [selectedVariable, setSelectedVariable] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<VariableType[]>([]);

    const addVariableOperations = () => {
        console.log(selectedVariable)
        setVariableOperation([...variableOperation, {}]);
    }

    const handleChange = (id: number) => {
        setSelectedVariable(id);
        const userSelectedOption = variables.filter(variable => variable.id === id);
        // const UpdatedSelectedOptions = userSelectedOption.map(option=>({
        //     ...option,operator:selectedOperator
        // }));;lc
        setSelectedOption(prevOptions => [...prevOptions, ...userSelectedOption]);

        console.log(selectedOption)
      
    }
 
  
    return (
        <div className="box">
            <h2>Create Dynamic Variable</h2>

            <form>
                <label>Name</label>
                <input className="variable-name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

                <div className="variable-equation">
                    <label>Frame an equation by selecting the variables</label>
                    {variableOperation.map((_, index) => (
                        <VariableOperation key={index}
                         addVariableOperations={addVariableOperations}
                          handleChange={handleChange}
                           selectedVariable={selectedVariable}
                           
                            />
                            
                    ))}
                </div>

                <div>
                    <Operation variableName={name} selectedOptions={selectedOption} />
                    {/* <Operation variableName={name} variable={selectedOption} /> */}
                </div>

                <button>Create</button>
            </form>
        </div>
    );
}

export default FormAddVariable;
