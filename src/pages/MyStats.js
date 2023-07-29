import * as React from "react";
import {
  Grid,
  List,
  ListItemText,
  Button,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import { Buffer } from "buffer";
import kp from "../keypair.json";
import { baseUrl } from "../config/statics";
window.Buffer = Buffer;

const { SystemProgram, Keypair } = web3;

// // Create a keypair for the account that will hold the GIF data.
// let baseAccount = Keypair.generate();
const arr = Object.values(kp._keypair.secretKey);
const secret = new Uint8Array(arr);
const baseAccount = web3.Keypair.fromSecretKey(secret);
// This is the address of your solana program, if you forgot, just run solana address -k target/deploy/myepicproject-keypair.json
const programID = new PublicKey("CJ9gp6GkxwseDmEQ1fA5BLN2frsciAzUC5TtQvU4idwf");

// Set our network to devnet.
const network = clusterApiUrl("devnet");

// Controls how we want to acknowledge when a transaction is "done".
const opts = {
  preflightCommitment: "processed",
};

export default function MyStats() {
  const [players, setPlayers] = React.useState([]);
  const [walletAddress, setWalletAddress] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [score, setScore] = React.useState("");

  const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new AnchorProvider(
      connection,
      window.solana,
      opts.preflightCommitment
    );
    return provider;
  };
  const getProgram = async () => {
    // Get metadata about your solana program
    const idl = await Program.fetchIdl(programID, getProvider());
    // Create a program that you can call
    return new Program(idl, programID, getProvider());
  };
  const getScores = async () => {
    try {
      const program = await getProgram();
      const account = await program.account.baseAccount.fetch(
        baseAccount.publicKey
      );
      console.log("Got the account", account);
    } catch (error) {
      console.log("Error in getGifList: ", error);
    }
  };
  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };
  const sendScore = async () => {
    if (inputValue.length === 0) {
      console.log("No score given!");
      return;
    }
    setInputValue("");
    console.log("Score:", inputValue);
    try {
      const provider = getProvider();
      const program = await getProgram();

      await program.rpc.addGif(inputValue, "another value", {
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
        },
      });
      console.log("Score successfully sent to program", inputValue);

      await getScores();
    } catch (error) {
      console.log("Error sending Score:", error);
    }
  };
  const createAccount = async () => {
    try {
      const provider = getProvider();
      const program = await getProgram();

      console.log("ping");
      await program.rpc.startStuffOff({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount],
      });
      console.log(
        "Created a new BaseAccount w/ address:",
        baseAccount.publicKey.toString()
      );
      await getScores();
    } catch (error) {
      console.log("Error creating BaseAccount account:", error);
    }
  };
  const checkIfWalletIsConnected = async () => {
    // We're using optional chaining (question mark) to check if the object is null
    if (window?.solana?.isPhantom) {
      console.log("Phantom wallet found!");
      const response = await window.solana.connect({ onlyIfTrusted: true });
      console.log("Connected :", response.publicKey.toString());
      //users public address
      setWalletAddress(response.publicKey.toString());
    } else {
      alert("Solana object not found! Get a Phantom Wallet 👻");
    }
  };
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
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);
  React.useEffect(() => {
    if (walletAddress) {
      // Call Solana program here.
      getScores();
      createAccount();
    } else {
      connectWallet();
    }
  }, [walletAddress]);
  React.useEffect(() => {
    getMyStat();
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <TextField
            label="Score"
            variant="outlined"
            value={score}
            sx={{ width: "80%" }}
            onChange={(e) => setScore(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <Button
            onClick={sendScore}
            variant="contained"
            style={{
              background:
                "linear-gradient(to right, #886BF2, #977EF2, #9E91F2)",
              color: "white",
              width: "50%",
              height: "56px",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>

      <Grid container justifyContent="flex-start" alignItems="center" mt={4}>
        <Grid item xs={4}>
          <Typography variant="h6" sx={{ color: "#4A4A4A" }}>
            Scores
          </Typography>
        </Grid>
      </Grid>

      <List>
        {players.map((player, index) => (
          <Box
            key={`player-${index}`}
            sx={{
              borderTop: "1px solid #E0E0E0",
              mt: 2,
              p: 1,
            }}
          >
            <Grid container>
              <Grid justifyContent="flex-start" display="flex" item xs={4}>
                <ListItemText
                  primary={`${index + 1}. ${player}`}
                  sx={{ color: "#4A4A4A" }}
                />
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </Box>
        ))}
      </List>
    </Box>
  );
}

// import * as React from "react";
// import {
//   Grid,
//   List,
//   ListItemText,
//   Button,
//   Box,
//   Typography,
// } from "@mui/material";
// import { baseUrl } from "../config/statics";

// export default function MyStats() {
//   const [players, setPlayers] = React.useState([]);
//   function getMyStat() {
//     var myHeaders = new Headers();
//     myHeaders.append("x-access-token", sessionStorage.getItem("accessToken"));

//     var requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };
//     fetch(baseUrl + "api/task/userScores/", requestOptions)
//       .then(async (response) => {
//         if (response.status === 200 || response.ok) {
//           return Promise.resolve(response.json());
//         }
//         const responseInJson = await Promise.resolve(response.json());
//         return Promise.reject(responseInJson);
//       })
//       .then((result) => {
//         setPlayers(result?.scores);
//       })
//       .catch((error) => console.log("error", error));
//   }
//   React.useEffect(() => {
//     getMyStat();
//   }, []);

//   return (
//     <Box sx={{ height: 400, width: "100%" }}>
//       <Grid container justifyContent="left" alignItems="center">
//         <Grid item xs={4}>
//           <Typography variant="h6" align="left" sx={{ color: "#4A4A4A" }}>
//             Name
//           </Typography>
//         </Grid>
//         <Grid item xs={4}>
//           <Typography variant="h6" align="left" sx={{ color: "#4A4A4A" }}>
//             Score
//           </Typography>
//         </Grid>
//         <Grid item xs={4}>
//           {/* This Grid item is here just to maintain the structure. */}
//         </Grid>
//       </Grid>
//       <List>
//         {players?.map((score, index) => (
//           <Grid
//             key={`playerscore-${index}`}
//             container
//             justifyContent="left"
//             alignItems="center"
//             sx={{
//               ...(index !== 0 && {
//                 mt: 1,
//               }),
//             }}

//           >
//             <Grid item xs={4}>
//               <ListItemText
//                 primary={`${sessionStorage.getItem("user") || "player"}`}
//                 sx={{ color: "#4A4A4A" }}
//                 align="left"
//               />
//             </Grid>
//             <Grid item xs={4}>
//               <ListItemText
//                 primary={score}
//                 sx={{ color: "#4A4A4A" }}
//                 align="left"
//               />
//             </Grid>
//             <Grid item xs={4}>
//               <Box display="flex" justifyContent="center">
//                 <Button
//                   variant="contained"
//                   style={{
//                     background:
//                       "linear-gradient(to right, #886BF2, #977EF2, #9E91F2)",
//                     color: "white",
//                     width: "90%",
//                   }}
//                 >
//                   Submit
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         ))}
//       </List>
//     </Box>
//   );
// }
