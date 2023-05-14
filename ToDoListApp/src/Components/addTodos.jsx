import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState} from "react";
import { AddEmploye } from "../app/features/employeSlice";
import { useDispatch,useSelector } from "react-redux";

export const AddTodos = () => {
  
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const {employes} = useSelector(state => state.employes)
  const dispatch=useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    AddEmploye(name, link);
    dispatch(AddEmploye({id:employes[employes.length-1].id+1,name,link}))
    
  };
  return (
    <div style={{ marginBottom: "20px" }}>
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
          {" "}
          Add
        </button>
      </form>
    </div>
  );
};