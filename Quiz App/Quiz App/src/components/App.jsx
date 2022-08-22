import { useState } from 'react'

import './App.css'


const App=() =>{
  const [asks,setasks]=useState([
    {id:1,
    img:'https://tr.web.img2.acsta.net/c_310_420/pictures/15/03/25/11/12/028100.jpg',
    sual:"Bu kimdir ?",
    A:"Rihanna",
    B:"Ava Max",
    C:"Beyonce",
    D:"Katy Perry",
    dogru:"A"
    },
    {id:2,
      img:'https://tr.web.img4.acsta.net/pictures/19/08/22/10/22/5221340.jpg',
      sual:"Bu kimdir ?",
      A:"Rihanna",
      B:"Ava Max",
      C:"Beyonce",
      D:"Katy Perry",
      dogru:"D"
      },
      {id:3,
        img:'https://images.theconversation.com/files/478225/original/file-20220809-24-orxjcu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
        sual:"Bu kimdir ?",
        A:"Dua Lipa",
        B:"Ava Max",
        C:"Beyonce",
        D:"Katy Perry",
        dogru:"A"
        },
        {id:4,
          img:'https://egscholars.com/wp-content/uploads/2022/02/Dua-Lipa.jpg',
          sual:"Bu kimdir ?",
          A:"Rihanna",
          B:"Selena Gomez",
          C:"Dua Lipa",
          D:"Katy Perry",
          dogru:"A"
          },
      
     ])
     
     const [count, setCount] = useState(0);
   return(
    <div className='container'>
      <div className='row justify-content-center'>
      <div className='col-lg-4 col-sm-6 mb-2'  key={asks[count].id}>
      <h2 className='text text-white'>{asks[count].sual}</h2>
      <img className='img' src={asks[count].img} alt="" />
     <div >
     <button  onClick={()=> count<asks.length-1 ?setCount(count+1): setCount(count)} type="button" className="btn btn-light m-2">{asks[count].A}</button>
      <button  onClick={()=> count<asks.length-1 ?setCount(count+1): setCount(count)} type="button" className="btn btn-light ml-2 m-2">{asks[count].B}</button>
     </div>
<div>
<button  onClick={()=> count<asks.length-1 ?setCount(count+1): setCount(count)} type="button" className="btn btn-light m-2">{asks[count].C}</button>
      <button  onClick={()=> count<asks.length-1 ?setCount(count+1): setCount(count)} type="button" className="btn btn-light m-2">{asks[count].D}</button>
</div>
    </div>
   </div>
  
     
      </div>
   )
}

export default App
