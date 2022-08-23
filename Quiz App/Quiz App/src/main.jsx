import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App';
import EmployeContextProvider from './components/contexts/askcontext';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container'>
     <EmployeContextProvider>
     <App />
     </EmployeContextProvider>
     
  </div>
)
