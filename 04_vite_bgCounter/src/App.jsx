import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() 
{
  const [color , setColor] = useState("olive") ; 

  // This won't Work !
  // function colorSetting(color)
  // {
  //   setColor({color}) ;
  // }

  const newColor1 = (newColor) => {
    setColor(newColor) ;
  } 


  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}} onClick={() => setColor('red')}>Red</button>
        </div>
        
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}} onClick={() => setColor('green')}>Green</button>
        </div>
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'purple'}} onClick={() => setColor('purple')}>Purple</button>
        </div>
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'brown'}} onClick={() => setColor('brown')}>Brown</button>
        </div>
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'black'}} onClick={() => setColor('black')}>Black</button>
        </div>
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'pink'}} onClick={() => setColor('pink') }>Pink</button>
        </div>
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'orangered'}} onClick={() => setColor('orangered')}>OrangeRed</button>
        </div>
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'yellowgreen'}} onClick={() => newColor1('yellowgreen')}>yellowgreen</button>
        </div>
      </div>
    </div>
  )
}

export default App
