import React, { useState } from "react";
import Users from "./pages/Users";
import Home from "./pages/Home";
import MyStats from "./pages/MyStats";
import Leaderboard from "./pages/Leaderboard";
import OnchainLeaderboard from "./pages/OnchainLeaderboard";
import AfterLogin from "./pages/AfterLogin";
import { CssBaseline, Container, Box } from "@mui/material";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
} from "react-router-dom";
import { signInWithGoogle, logoutUser } from "./Auth.js";

const Navigation = () => {
  const [authorizedUser, setAuthorizedUser] = useState(
    false || sessionStorage.getItem("accessToken")
  );
  console.log(authorizedUser);

  const history = useHistory();
  function goHome() {
    history.push(`/AfterLogin`);
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, #DCF8EF, #FEE2F8)',
        color: '#fff',
      }}
    >
    

      <Switch>
        <Route path="/MyStats">
          <MyStats />
        </Route>
        <Route path="/Leaderboard">
          <Leaderboard />
        </Route>
        <Route path="/OnchainLeaderboard">
          <OnchainLeaderboard />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/AfterLogin">
          <AfterLogin /> 
        </Route>
        <Route path="/">
          <Users
            signInWithGoogle={() => signInWithGoogle(setAuthorizedUser, goHome)}
          />
        </Route>
      </Switch>
    </Box>
  );
};

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Navigation />
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}



