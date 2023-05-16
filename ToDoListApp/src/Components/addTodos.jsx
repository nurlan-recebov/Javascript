import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState,useEffect} from "react";
import { AddEmploye } from "../app/features/employeSlice";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from "uuid";
export const AddTodos = () => {
  
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const {employes} = useSelector(state => state.employes)
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    AddEmploye(name, link);
    dispatch(AddEmploye({id:uuidv4(),name,link}))
    
  };
 
 
  return (
    <div style={{ marginBottom: "20px" }}>
     <Button onClick={() => navigate("/")}>Back</Button>
      <div>AddTodos</div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="standard-basic"
            label="Name"
            variant="standard"
          />
          <TextField
            value={link}
            onChange={(e) => setLink(e.target.value)}
            id="standard-basic"
            label="Link"
            variant="standard"
          />
        </Box>
        <button
          style={{ padding: "2px 10px", background: "grey", color: "white" }}
          type="submit"
        >
          
          Add
        </button>
      </form>
    </div>
  );
};