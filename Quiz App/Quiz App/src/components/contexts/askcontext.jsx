import { createContext, useState,useEffect } from "react";
export const EmployeContext = createContext();
const EmployeContextProvider = (props) =>{
    const [asks,setasks]=useState([
        {id:1,
        img:'https://tr.web.img2.acsta.net/c_310_420/pictures/15/03/25/11/12/028100.jpg',
        sual:"Bu kimdir ?",
        A:"Rihanna",
        B:"Ava Max",
        C:"Beyonce",
        D:"Katy Perry",
        dogru:"Rihanna"
        },
        {id:2,
          img:'https://tr.web.img4.acsta.net/pictures/19/08/22/10/22/5221340.jpg',
          sual:"Bu kimdir ?",
          A:"Rihanna",
          B:"Ava Max",
          C:"Beyonce",
          D:"Katy Perry",
          dogru:"Katy Perry"
          },
          {id:3,
            img:'https://images.theconversation.com/files/478225/original/file-20220809-24-orxjcu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
            sual:"Bu kimdir ?",
            A:"Dua Lipa",
            B:"Ava Max",
            C:"Beyonce",
            D:"Katy Perry",
            dogru:"Beyonce"
            },
            {id:4,
              img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DuaLipaO2020522_%28101_of_110%29_%2852052470251%29_%28cropped%29.jpg/1200px-DuaLipaO2020522_%28101_of_110%29_%2852052470251%29_%28cropped%29.jpg',
              sual:"Bu kimdir ?",
              A:"Rihanna",
              B:"Selena Gomez",
              C:"Dua lipa",
              D:"Katy Perry",
              dogru:"Dua lipa"
              },
              {id:5,
                img:"https://cdns-images.dzcdn.net/images/artist/4099da261a61666f58bb3598f0c4c37f/500x500.jpg",
                sual:"Bu kimdir ?",
                A:"Ava Max",
                B:"Selena Gomez",
                C:"Dua lipa",
                D:"Miley Cyrus",
                dogru:"Ava Max"
                },
          
         ])
         const addEmployee = (img, sual, A,B,C,D,dogru) => {
          setasks([...asks, { id:"", img, sual, A,B,C,D,dogru }]);
        };
        useEffect(() => {
          const asks = localStorage.getItem('asks')
          setasks(JSON.parse(asks))
        },[])
        useEffect(() => {
          localStorage.setItem('asks', JSON.stringify(asks))
        })
         return (
            <EmployeContext.Provider
              value={{ asks,addEmployee}}
            >
              {props.children}
            </EmployeContext.Provider>
          );   
        }
        export default EmployeContextProvider;