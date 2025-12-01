import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <--- Add this import
import App from './App.jsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Updated Logic:
      - If we are in Development (localhost), use '/'
      - If we are in Production (GitHub Pages), use '/my-portfolio/'
    */}
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/my-portfolio/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)