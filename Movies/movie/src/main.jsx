import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='d-flex'>
    <App></App>
    <App></App>
    <App></App>
  
  </div>
)
