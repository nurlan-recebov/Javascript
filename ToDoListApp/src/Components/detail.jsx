import React from 'react'

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getEmployes, setDetail } from "../app/features/employeSlice";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
export const Detail = () => {


    let employe = useSelector((state)=>state.employes.detail)
    const navigate = useNavigate();

  return (
    <div>
        <Button onClick={() => navigate("/")}>Back</Button>
         <Grid item xs={4} key={employe.id}>
              <Card sx={{ maxWidth: "600px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="420"
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


    </div>
  )
}
