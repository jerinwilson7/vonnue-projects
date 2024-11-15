import { queryOptions, useQuery } from "@tanstack/react-query"

export default function App() {

  const fetchTodo =(id:string)=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }

  const groupOptions=(id:string)=>{
    return queryOptions({
      queryKey:['groups',id],
      queryFn:()=>fetchTodo(id),
      staleTime:5*1000,
    })
  }
  // const {data,isPending,isError,error} =useQuery({
  //   queryKey:['todos'],
  //   queryFn:fetchTodo
  // })


  const {data,isError,isPending,error} = useQuery(groupOptions('4'))

  console.log(data)
  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <ul>
      
      
    </ul>
  )
}


// 