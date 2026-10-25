import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App/App'
import MyProvider from './Context/MyProvider'
import CartProvider from './Context/CartProvider'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider>
    <CartProvider>
      <App/>
    </CartProvider>
    </MyProvider>
  </StrictMode>,
)
