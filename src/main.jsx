import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import App from './exercises/overview/App.jsx'
// import App from './exercises/tic-tac-toe/App.jsx'
// import './exercises/tic-tac-toe/style.css'
// import App from './exercises/thinking-in-react/App.jsx'
// import App from './exercises/describing-ui/App.jsx'
// import App from './exercises/describing-ui/first-component/App.jsx'
// import App from './exercises/describing-ui/import-export-components/App.jsx'
// import App from './exercises/describing-ui/js-in-jsx/App.jsx'
// import App from './exercises/describing-ui/passing-props/App.jsx'
// import App from './exercises/describing-ui/conditional-rendering/App.jsx'
// import App from './exercises/describing-ui/rendering-lists/App.jsx'
import App from './exercises/adding-interactivity/responding-to-events/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
