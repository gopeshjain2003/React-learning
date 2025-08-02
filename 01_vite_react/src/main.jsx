import React  from 'react'            // React
import ReactDOM from 'react-dom/client' // ReactDOM
import App from './App.jsx'

// creating function and testing !
function MyApp()
{
  return (
    <div>
      <h1>My Application from main.jsx !</h1>
    </div>
  )
}


// Invoking the same function of 'custom_react_02' ! Will NOT WORK !
// Custom React Element (Behind the screne) .
const ReactElement = {

  type : 'a' , 
  prop : {
    href : 'https://google.com' ,
    target : '_blank'
  } ,
  children : 'React Element '

} ;

// Will work outside of ReactElement
const anotherElement = (
  <a href="https://google.com" target='_blank'>Welcome to Google !</a>
) ;


// Injecting the final expression in ReactElement1 !
const anotherUser = "Bhavya Mittal" ;


// will work when is out React.StrictMode
const ReactElement1 = React.createElement(
  'a' ,
  {href : 'https://google.com' , target : '_blank' } ,
  'click me on reactElement' ,
  anotherUser
) ;



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  //   <MyApp/>
    
  // </React.StrictMode>,



  // anotherElement
  ReactElement1
)