import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useContext } from "react";

import { EmployeContext } from "../Api/contextapi";

export const AddTodos = () => {
  const { addEmployee } = useContext(EmployeContext);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, link);
    
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
