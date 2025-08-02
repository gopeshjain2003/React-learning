import Chai from './chai' ;


// Creating & testing the function 
function Code()
{
  return (
    <h3>Welcome to function Code() in App.jsx</h3>
  )
}

function App() {

  // It is final expression which can be injected in return section of the method signature ! 
  const username = "Bhavya Jain" ;

  return (
    <>
      <h1>Chai aur React with Vite | Bhavya Jain</h1>
      <Chai />    
      <Code/>
      <h3>Welcome To India</h3>
      <br/>
      Name is : <i>{username}</i>
    </>
  )
}

export default App