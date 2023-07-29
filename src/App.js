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
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/MyStats">My Stats</Link>
          </li>
          <li>
            <Link to="/OnchainLeaderboard">OnchainLeaderboard</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li><li>
            <Link to="/Leaderboard">Leaderboard</Link>
          </li>
          <li>
          <Link to="/AfterLogin">AfterLogin</Link>
        </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/MyStats">
          <MyStats />
        </Route>
        <Route path="/Leaderboard">
          <Leaderboard />
        </Route>
        <Route path="/users">
          <Users
            signInWithGoogle={() => signInWithGoogle(setAuthorizedUser, goHome)}
          />
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


// import React, { useState } from "react";
// import Users from "./pages/Users";
// import Home from "./pages/Home";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { signInWithGoogle, logoutUser } from './Auth.js';

// export default function App() {
//   const [authorizedUser, setAuthorizedUser] = useState(
//     false || sessionStorage.getItem("accessToken")
//   );

//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/Home">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users signInWithGoogle={() => signInWithGoogle(setAuthorizedUser)} />
//           </Route>
//           <Route path="/Home">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function About() {
//   return <h2>About</h2>;
// }

// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import "./App.css";
// import { useState } from "react";
// import Tasks from "./pages/Tasks";

// function App() {
//   const provider = new GoogleAuthProvider();
//   provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
//   const auth = getAuth();

//   const [authorizedUser, setAuthorizedUser] = useState(
//     false || sessionStorage.getItem("accessToken")
//   );

//   function signInwithGoogle() {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         // After user is signed in, set the state to true
//         const user = result.user;
//         if (user) {
//           console.log("3");
//           user.getIdToken().then((tkn) => {
//             console.log("Token:", tkn);
//             // set access token in session storage
//             sessionStorage.setItem("accessToken", tkn);
//             setAuthorizedUser(true);
//           });
//         }
//         console.log(user);
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;

//         const errorMessage = error.message;

//         // The email of the user's account used.
//         const email = error.customData.email;

//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//         // console.log(credential);
//       });
//   }
//   function logoutUser() {
//     signOut(auth)
//       .then(() => {
//         // clear session storage
//         sessionStorage.clear();
//         setAuthorizedUser(false);
//         // window.location.replace("/");
//         alert("Logged Out Successfully");
//       })
//       .catch((error) => {
//         // An error happened.
//         alert(error);
//       });
//   }
//   return (
//     <div className="App">
//       {authorizedUser ? (
//         <>
//           <p>Authorized user</p>
//           <h1>Tasks</h1>
//           {sessionStorage.getItem("accessToken")}
//           {
//             /* <Tasks token={sessionStorage.getItem("accessToken")} />*/
//             <button onClick={logoutUser}>Logout Button</button>
//           }
//         </>
//       ) : (
//         <>
//           <button onClick={signInwithGoogle}>SignWithGoogle</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
