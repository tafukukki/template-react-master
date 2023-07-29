import { Button, TextField, Container, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";  // useHistory import edildi

export default function Users({ signInWithGoogle }) {
  const history = useHistory(); // history oluşturuldu
  const [AuthorizedUser, setAuthorizedUser] = useState(false)
  console.log(`User is Authorized`, AuthorizedUser);
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <Typography component="h1" variant="h5" color="#4A4A4A">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              mt: 3, 
              mb: 2, 
              height: '50px', 
              backgroundImage: 'linear-gradient(to right, #886BF2, #977EF2, #9E91F2)',
            }}
            component={RouterLink}
            to="/AfterLogin"
          >
            Login
          </Button>
          {/* Signin with Google button with smooth gradient from light purple to dark purple */}
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ 
              mt: 3, 
              mb: 2, 
              height: '50px', 
              backgroundImage: 'linear-gradient(to right, #886BF2, #977EF2, #9E91F2)'
            }}
            onClick = {signInWithGoogle} // history argüman olarak verildi
          >
            Signin with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
}



// çalışan kod
// import { Button, TextField, Container, Typography, Box } from "@mui/material";
// import React from "react";
// import { Link as RouterLink } from "react-router-dom";

// export default function Users({ signInWithGoogle }) {
//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           marginTop: 8,
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Login
//         </Typography>
//         <Box component="form" noValidate sx={{ mt: 1 }}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
         
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ 
//               mt: 3, 
//               mb: 2, 
//               height: '50px', 
//               backgroundImage: 'linear-gradient(to right, #886BF2, #977EF2, #9E91F2)',
//             }}
//             component={RouterLink}
//             to="/home"
//           >
//             Login
//           </Button>
//           {/* Signin with Google button with smooth gradient from light purple to dark purple */}
//           <Button
//             type="button"
//             fullWidth
//             variant="contained"
//             sx={{ 
//               mt: 3, 
//               mb: 2, 
//               height: '50px', 
//               backgroundImage: 'linear-gradient(to right, #886BF2, #977EF2, #9E91F2)'
//             }}
//             onClick={signInWithGoogle}
//           >
//             Signin with Google
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// }



// import { Button, TextField, Container, Typography, Box } from "@mui/material";
// import React from "react";
// import { Link as RouterLink } from "react-router-dom";

// export default function Users() {
//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           marginTop: 8,
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Login
//         </Typography>
//         <Box component="form" noValidate sx={{ mt: 1 }}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
         
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ 
//               mt: 3, 
//               mb: 2, 
//               height: '50px', 
//               backgroundImage: 'linear-gradient(to right, #886BF2, #977EF2, #9E91F2)',
//             }}
//             component={RouterLink}
//             to="/home"
//           >
//             Login
//           </Button>
//           {/* Signin with Google button with smooth gradient from light purple to dark purple */}
//           <Button
//             type="button"
//             fullWidth
//             variant="contained"
//             sx={{ 
//               mt: 3, 
//               mb: 2, 
//               height: '50px', 
//               backgroundImage: 'linear-gradient(to right, #886BF2, #977EF2, #9E91F2)'
//             }}
//             onClick={() => console.log("Google Sign-In not implemented yet")}
//           >
//             Signin with Google
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// }
