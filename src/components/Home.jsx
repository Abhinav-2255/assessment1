
import {
    Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
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
    <div className="maindiv">
      <Grid container spacing={2} className="maingrid">
        {value.map((val) => (
          <Grid item xs="auto" className="grid">
            <Card className="card" variant="outlined">
              <CardContent className="textalign">
                <Typography>
                  <b className="typo">Name : </b> {val.userId}
                </Typography>
                <Typography>
                  <b className="typo">Age : </b> {val.id}
                </Typography>
                <Typography>
                  <b className="typo">Gender : </b> {val.title}
                </Typography>
                <Typography>
                  <b className="typo">Username : </b> {val.body}
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