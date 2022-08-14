import EmployeList from './EmployeList'
import './App.css'
import   EmployeContextProvider from "./contexts/EmployeContext"
function App() {


  return (
    <div className="App">
      <div className="container-xl">
	<div className="table-responsive">
		<div className="table-wrapper">
			
      <EmployeContextProvider>
      <EmployeList></EmployeList>
      </EmployeContextProvider>
   
    </div>
    </div>
    </div>
    </div>
  )
}

export default App
