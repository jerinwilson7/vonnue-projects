
import {useJsApiLoader, Autocomplete} from '@react-google-maps/api'
import { useRef } from 'react'

function App() {
  const inputRef = useRef(null)
  const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: 'AIzaSyBgM4A-_-BbYEGYO-nYRhkifj7-twSa6-Y',
      libraries:['places']
    })
    console.log(isLoaded)

    const handleOnPlacesChanged=()=>{
      let address = inputRef?.current?.getPlace()
      console.log('address :',address)
    }
return (
  <div style={{marginTop:'101%', textAlign:'center'}}>
      {isLoaded &&
      <Autocomplete
      options={{componentRestrictions:{country:"uk"},strictBounds:true}}
      onLoad={(ref)=>inputRef.current = ref}
      onPlacesChanged={handleOnPlacesChanged}>
      <input
      type='text'
      placeholder='Enter your location'
      style={{boxSizing:'border-box', width:'50%', border:'1px solid transparent', height:'50px', padding:'0 12px', borderRadius:'12px', marginTop:'30px'}}
      className='box-border border w-[400px] h-12 px-3 rounded-sm text-sm mt-8' 
      />
      </Autocomplete>
  }
  </div>
)
}


export default App
