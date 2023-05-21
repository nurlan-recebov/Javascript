import React from 'react'
import { useSelector, useDispatch } from "react-redux";
export const Detail = () => {
  let {detail} = useSelector((state)=>state.counter)
  return (
    <div><h1>{detail.name}</h1></div>
  )
}
