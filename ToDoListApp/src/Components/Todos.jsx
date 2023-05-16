import { useContext, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getEmployes } from "../app/features/employeSlice";
import { useNavigate,useLocation } from "react-router-dom";
import Button from '@mui/material/Button';

function Todos() {
  const dispatch = useDispatch();
  const { employes } = useSelector((state) => state.employes);
  const navigate = useNavigate();
  
  const location = useLocation();
  useEffect(() => {
    dispatch(getEmployes());
  }, [employes]);
  
  return (
    <div
      style={{ maxWidth: "1000px", display: "flex", justifyContent: "center",flexDirection:"column" }}
    >
      <Button onClick={() => navigate("/Add")}>Add Todos</Button>
      <Grid container spacing={2}>
        {employes.map((employe) => {
          return (
            <Grid item xs={4} key={employe.id}>
              <Card sx={{ maxWidth: "345px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={employe.link}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {employe.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Todos;