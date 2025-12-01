import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <--- Add this import
import App from './App.jsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* We wrap the App in BrowserRouter here.
      'import.meta.env.BASE_URL' automatically reads the 'base' value 
      from your vite.config.js ('/my-portfolio/' on build, '/' on dev).
    */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)