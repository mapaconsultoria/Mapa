// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppMapa } from '../AppMapa'
import { BrowserRouter } from 'react-router-dom'
import { GoogleMapsProvider } from './context/GoogleMapsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <GoogleMapsProvider>
   <BrowserRouter>
     <AppMapa />
    </BrowserRouter>
  </GoogleMapsProvider>,
    
  {/* </React.StrictMode>, */}
)
