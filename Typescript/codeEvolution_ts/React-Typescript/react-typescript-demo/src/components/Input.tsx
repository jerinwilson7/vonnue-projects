

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) =>void
}


function Input({value,handleChange}:InputProps) {

    // const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    //     console.log(event)
    // }
  return (
    <input type="text" onChange={handleChange} value={value}/>
  )
}

export default Input