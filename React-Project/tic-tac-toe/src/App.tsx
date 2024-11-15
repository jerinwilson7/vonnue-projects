
import './App.css'
import { Board } from './components/Board'

function App() {

  return (
   <div className='app'>
    <h1>Tic Tack Game</h1>
    <Board/>
    <button>Reset</button>
   </div>
  )
}

export default App
