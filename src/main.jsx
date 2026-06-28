
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import './App.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <App />
    
  </StrictMode>,
)