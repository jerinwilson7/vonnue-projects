
// import './App.css'
// import Button from './components/Button'
// import Container from './components/Container'
// import Greet from './components/Greet'
// import Heading from './components/Heading'
// import Input from './components/Input'
// import Oscar from './components/Oscar'
// import Person from './components/Person'
// import PersonList from './components/PersonList'
// import Status from './components/Status'

// import Box from "./components/context/Box"
// import { ThemeContextProvider } from "./components/context/ThemeContext"
import { UserContextProvider } from "./components/context/UserContext"
import {User} from "./components/context/User"

// function App() {

//   const PersonName = {
//     first :'Bruce',
//     last :'Wayne'
//   }

//   const nameList = [
//     {
//       first: 'Bruce',
//       last: 'Wayne'
//     },

//     {
//       first: 'Clark',
//       last:'Kent'
//     },

//     {
//       first:'Princess',
//       last:'Diana'
//     }
//   ]

//   return (
//     <>
//       <Greet name='Jerin' unreadMessages = {10} isLoggedIn = {false}/>
//       <Person name={PersonName}/>
//       <PersonList names={nameList}/>
//       <Status status='loading' />
//       <Heading>Placeholder text</Heading>
//       <Oscar>
//         <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
//       </Oscar>
//       <Greet name='Jerin' isLoggedIn={false} />

//       <Button 
//       handleClick={(event,id)=>{
//         console.log('Button clicked',event,id)
//       }}
//       />

//       <Input value='' handleChange={(event)=>console.log(event)}/>

//       <Container styles={{border:'1px solid white',padding:'1rem'}}/>
      
//     </>
//   )
// }

// export default App



// function App() {
//   return (
//     <div>
//       <ThemeContextProvider>
//         <Box />
//       </ThemeContextProvider>
//     </div>
//   )
// }

// export default App



function App() {
  return (
    <div>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
    </div>
  )
}

export default App