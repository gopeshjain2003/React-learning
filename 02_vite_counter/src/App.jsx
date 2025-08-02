import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() 
{
  // useState() is a hook , and it returns arrays of 2 items 
  // counter is a variable & it can be anything !
  // setCounter is a function , because it helps to update the UI !
  const [counter , setCounter] = useState(1) ;

  // let counter = 15 ;

  
  // Add Button functionality has disabled property in return section , if counter >=10 .
  const addValue = () => 
  {
    console.log("Counter Varaible + : ",counter) ;
    let add = counter+1 ;
    setCounter(add) ;
  } ;

  const decreaseValue = () => 
  {
    console.log("Counter Varaible - : ",counter) ;
    // counter = counter-1 ;

    // Only if counter value is >0
    if(counter > 0)
    {
      setCounter(counter-1);
    }

  }
  
  

  return (
    <>
      <h1>Chai aur sutta !</h1>

      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue} disabled={counter>=10}>Add Value </button>


      <button id="minus" onClick={decreaseValue} disabled={counter === 0}>Remove Value </button>

    </>
  )
}

export default App
