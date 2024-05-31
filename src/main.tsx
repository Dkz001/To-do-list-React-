import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Joel from './joel.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Joel />
  </React.StrictMode>,
)
