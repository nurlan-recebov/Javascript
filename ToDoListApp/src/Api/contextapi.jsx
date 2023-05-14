import { createContext, useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
export const EmployeContext = createContext();
const EmployeContextProvider = (props) => {
  const [employes, setEmployess] = useState([])
 
  const getAll=()=>{
    fetch('http://localhost:3000/todos')
    .then(response => response.json())
    .then(json => setEmployess(json))
  }
  useEffect(() => {
    getAll()
   
  }, [])


  
  const addEmployee = (name,link) => {
    setEmployess([...employes, { id: uuidv4(), name,link}]);
  };
  return (



    
    <EmployeContext.Provider
      value={{ employes,addEmployee }}
    >
      {props.children}
    </EmployeContext.Provider>
  );
};
export default EmployeContextProvider;
