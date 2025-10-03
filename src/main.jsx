import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import App from './exercises/overview/App.jsx'
import App from './exercises/tic-tac-toe/App.jsx'
import './exercises/tic-tac-toe/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
