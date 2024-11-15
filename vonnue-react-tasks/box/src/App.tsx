import './App.css'
import { Box } from './components/box'

function App() {

  const boxLength = prompt('enter the number of boxed')
  console.log(boxLength)

  return (
    <main>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-8'>
        <Box/>
        <Box/>
        <Box/>
        </div>
      </div>
    </main>
  )
}

export default App
