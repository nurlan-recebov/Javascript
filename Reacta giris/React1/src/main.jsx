import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'





ReactDOM.createRoot(document.getElementById('root')).render(
  
  <div className='Main'>
    <App cardTitle="Miley cyrus"
     image='https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Miley_Cyrus_Primavera19_-226_%2848986293772%29_%28cropped%29.jpg/640px-Miley_Cyrus_Primavera19_-226_%2848986293772%29_%28cropped%29.jpg'> </App>
    <App cardTitle="Rihanna"  
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkS4-ETzy73DSZkhBYxpX62xNkKf03v-otKw&usqp=CAU'></App>
    <App cardTitle="Dua Lipa"   
    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxRF_IdJiGV04TJYUU_Rp4aEjXlX9ZeU4QMg&usqp=CAU'></App>
     <App cardTitle="Katy Perry"   
    image='https://www.refinery29.com/images/10212271.jpg'></App>
    
    
  </div>
  
)
