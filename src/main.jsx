import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CardProvider } from './context/CardContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CardProvider>
    <App />
  </CardProvider>
)
