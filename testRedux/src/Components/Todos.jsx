import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setDetail } from '../App/reducers/todosSlice';
import { useGetTodoListsQuery } from '../App/reducers/createApi/employeapi';
import { todoListsApi } from '../../../createapi/employeapi';
export const Todos = () => {
const dispatch=useDispatch()
const {data,isLoading,error}=useGetTodoListsQuery()
console.log(data);



if(isLoading){
  return <h1>Loading</h1>
}
if (error) {
  return <div>Error: {error.message}</div>;
} 

  return (
    <div>
 <div>
      {data && data.map(todoList => (
        <div onClick={()=>(dispatch(setDetail(todoList)))} key={todoList.id}>{todoList.name}</div>
      ))}
    </div>
         
      
    </div>
  )
}
