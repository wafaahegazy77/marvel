import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.scss'
import { IsMobileProvider } from './utilis/isMobContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <IsMobileProvider>
      <App />
    </IsMobileProvider>
  // </React.StrictMode>,
)
