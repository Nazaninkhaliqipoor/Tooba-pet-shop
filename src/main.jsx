import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App/App'
import MyProvider from './Context/MyProvider'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider>
    <App />
    </MyProvider>
  </StrictMode>,
)
