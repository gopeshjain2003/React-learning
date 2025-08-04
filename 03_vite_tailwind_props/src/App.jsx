import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() 
{

  const [count , setCount] = useState(0) ;
  
  // Setting the Object and injecting them below in return() statement !
  let myObject = {
    firstName : "Bhavya" ,
    lastName : 'Jain'
  } ;

  // here we are making array and injecting them in return() statement ! 
  let newArr = [10 ,20 ,30] ;

    return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>

      {/* Here name and username is passed to Card.jsx  !*/}
      <Card name='Bhavya' someObject={myObject}  arr={newArr} username="Deepak"/>
      <Card name="Radhika"/>
        
    </>
  )
}

export default App ;