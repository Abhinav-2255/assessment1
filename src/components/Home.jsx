import "./Home.css";
import { Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  var [value, setValue] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      setValue((value = response.data));
    });
  }, []);
  return (
    <div className="cls1">
      <div className="cls2"></div>
      <Grid container spacing={2} className="maingrid">
        {value.map((val) => (
          <Grid item xs="auto" className="grid">
            <Card className="card" variant="outlined">
              <CardContent className="textalign">
                <Typography>
                  <b className="typo">Id : </b> {val.id}
                </Typography>
                <Typography>
                  <b className="typo">Title : </b> {val.title}
                  </Typography>
              </CardContent>
              <CardActions>
              </CardActions><br></br>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;