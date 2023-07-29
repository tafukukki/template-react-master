import * as React from "react";
import {
  Grid,
  List,
  ListItemText,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { baseUrl } from "../config/statics";

export default function MyStats() {
  const [players, setPlayers] = React.useState([]);
  function getMyStat() {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", sessionStorage.getItem("accessToken"));

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(baseUrl + "api/task/userScores/", requestOptions)
      .then(async (response) => {
        if (response.status === 200 || response.ok) {
          return Promise.resolve(response.json());
        }
        const responseInJson = await Promise.resolve(response.json());
        return Promise.reject(responseInJson);
      })
      .then((result) => {
        setPlayers(result?.scores);
      })
      .catch((error) => console.log("error", error));
  }
  React.useEffect(() => {
    getMyStat();
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Grid container justifyContent="left" alignItems="center">
        <Grid item xs={4}>
          <Typography variant="h6" align="left" sx={{ color: "#4A4A4A" }}>
            Name
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" align="left" sx={{ color: "#4A4A4A" }}>
            Score
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {/* This Grid item is here just to maintain the structure. */}
        </Grid>
      </Grid>
      <List>
        {players?.map((score, index) => (
          <Grid
            key={`playerscore-${index}`}
            container
            justifyContent="left"
            alignItems="center"
            sx={{
              ...(index !== 0 && {
                mt: 1,
              }),
            }}
          >
            <Grid item xs={4}>
              <ListItemText
                primary={`${sessionStorage.getItem("user") || "player"}`}
                sx={{ color: "#4A4A4A" }}
                align="left"
              />
            </Grid>
            <Grid item xs={4}>
              <ListItemText
                primary={score}
                sx={{ color: "#4A4A4A" }}
                align="left"
              />
            </Grid>
            <Grid item xs={4}>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  style={{
                    background:
                      "linear-gradient(to right, #886BF2, #977EF2, #9E91F2)",
                    color: "white",
                    width: "90%",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        ))}
      </List>
    </Box>
  );
}
