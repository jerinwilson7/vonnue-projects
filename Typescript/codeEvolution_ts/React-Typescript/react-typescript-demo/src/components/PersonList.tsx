import { Name } from "./Person.types"

type PersonListProps = {
    names : Name[]
}


function PersonList(props:PersonListProps) {
  return (
    <div>
    {props.names.map((person)=>{
        return (
            <h2 key={person.first}> {person.first} {person.last}</h2>
        )
    })}
</div>
  )
}

export default PersonList