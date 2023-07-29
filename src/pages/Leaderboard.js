import * as React from "react";
import { Grid, List, ListItemText, Box, Typography } from "@mui/material";
import { baseUrl } from "../config/statics";

export default function LeaderBoard() {
  const [leaderboard, setLeaderboard] = React.useState([]);
  function getLeaderboard() {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", sessionStorage.getItem("accessToken"));

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(baseUrl + "users/freeLeaderboard/", requestOptions)
      .then(async (response) => {
        if (response.status === 200 || response.ok) {
          return Promise.resolve(response.json());
        }
        const responseInJson = await Promise.resolve(response.json());
        return Promise.reject(responseInJson);
      })
      .then((result) => {
        console.log(result);
        setLeaderboard(result);
      })
      .catch((error) => console.log("error", error));
  }
  React.useEffect(() => {
    getLeaderboard();
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
    <Grid container>
    <Grid display={"flex"} justifyContent="flex-start" item xs={4}>
        <Typography variant="h6" sx={{ color: "#4A4A4A" }} align="center">
          Username
        </Typography>
      </Grid>
      <Grid display={"flex"} justifyContent="flex-start" item xs={4}>
        <Typography variant="h6" sx={{ color: "#4A4A4A" }} align="center">
          Score
        </Typography>
      </Grid>
      <Grid item xs={4}>
        {/* This Grid item is here just to maintain the structure. */}
      </Grid>
    </Grid>
    <List>
      {leaderboard.map((player, index) => (
        <Box
          key={`Leaderboard-${index}`}
          sx={{
            borderTop: "1px solid #E0E0E0",
            mt: 2,
            p: 1,
          }}
        >
          <Grid container>
            <Grid item xs={4}>
              <ListItemText
                primary={`${index + 1}. ${player.nickname}`}
                sx={{ color: "#4A4A4A", textTransform: "lowercase" }}
              />
            </Grid>
            <Grid item xs={4}>
              <ListItemText
                primary={player.userScore}
                sx={{ color: "#4A4A4A" }}
              />
            </Grid>
            <Grid item xs={4}>
              {/* No submit button for leaderboard */}
            </Grid>
          </Grid>
        </Box>
      ))}
    </List>
  </Box>
);
}