import { useContext, useEffect, useState } from "react";
const Pagination = ({pages,setCurrentPage,currentEmployes,employes}) => {
 
  const numOfpages = [];
  for (let i = 1; i <= pages; i++) {
    numOfpages.push(i);
  }
  const [currentButton, setCurrentButton] = useState(1);
useEffect(()=>{
    setCurrentPage(currentButton)
},[currentButton,setCurrentButton])
  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>{currentEmployes.length}</b> out of <b>{employes.length}</b> entries
      </div>
      <ul className="pagination">
        <li
          className={`${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
        >
          <a
            className="page-link"
            href="#!"
            onClick={() =>
              setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            Previous
          </a>
        </li>
        {numOfpages.map((page, index) => {
            return(
                <li
                key={index}
                className={`${
                  currentButton === page ? "page-item-active" : "page-iem"
                }`}
              >
                <a onClick={()=>setCurrentButton(page)} className="page-link" href="#!">
                  {page}
                </a>
              </li>
            )
         
        })}
        <li
          className={`${
            currentButton === numOfpages.length
              ? "page-item disabled"
              : "page-item"
          }`}
        >
          <a
            className="page-link"
            href="#!"
            onClick={() =>
              setCurrentButton((prev) =>
                prev === numOfpages.length ? prev : prev + 1
              )
            }
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
