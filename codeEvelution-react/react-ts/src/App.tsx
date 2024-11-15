
import './App.css'
import { User } from './components/context/User'
import {  UserContextProvider } from './components/context/UserContext'


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
// lkfgm