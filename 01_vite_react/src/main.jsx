import { StrictMode } from 'react'            // React
import { createRoot } from 'react-dom/client' // ReactDOM
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)