import React, { useState } from 'react';
import { Grid, List, ListItem, ListItemText, Button, Box, Typography, Tab, Tabs, Container } from '@mui/material';
import LeaderBoard from './Leaderboard';
import OnchainLeaderBoard from './OnchainLeaderboard';
import MyStats from './MyStats';

export default function AfterLogin() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // Centers vertically
          height: '100vh', // Makes the container take up the full height of the viewport
          marginTop: 8,
        }}
      >
        <Box sx={{ width: '100%', mt: 5 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="My Stats" />
              <Tab label="Leaderboard" />
              <Tab label="Premium Leaderboard" />
            </Tabs>
          </Box>
          {value === 0 && (
            <Grid container sx={{ mt: 6 }} alignItems='center' justifyContent='center'> {/* Centers Grid items */}
              <Grid item xs={12}>
                <MyStats />
              </Grid>
            </Grid>
          )}
          {value === 1 && (
            <Grid container sx={{ mt: 6 }} alignItems='center' justifyContent='center'>
              <Grid item xs={12}>
                <LeaderBoard />
              </Grid>
            </Grid>
          )}
          {value === 2 && (
            <Grid container sx={{ mt: 6 }} alignItems='center' justifyContent='center'>
              <Grid item xs={12}>
                <OnchainLeaderBoard />
              </Grid>
            </Grid>
          )}
        </Box>
      </Box>
    </Container>
  );
}



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { Tab, Tabs, Typography, Container, List, ListItem, ListItemText, Button, Grid } from '@mui/material';

// const players = [
//   { id: 1, name: 'John', score: 35 },
//   { id: 2, name: 'Jane', score: 42 },
//   // More players here...
// ];

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// export default function AfterLogin() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Container maxWidth="md">
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           marginTop: 8,
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           After Login
//         </Typography>
//         <Box sx={{ width: '100%', mt: 3 }}>
//           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//             <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//               <Tab label="My Stats" />
//               <Tab label="Leaderboard" />
//               <Tab label="Onchain Learderboard" />
//             </Tabs>
//           </Box>
//           <TabPanel value={value} index={0}>
//             <List>
//               {players.map(player => (
//                 <ListItem key={player.id}>
//                   <Grid container>
//                     <Grid item xs={4}>
//                       <ListItemText primary={player.name} />
//                     </Grid>
//                     <Grid item xs={4}>
//                       <ListItemText primary={player.score} />
//                     </Grid>
//                     <Grid item xs={4}>
//                       <Button variant="contained" color="primary">
//                         Submit
//                       </Button>
//                     </Grid>
//                   </Grid>
//                 </ListItem>
//               ))}
//             </List>
//           </TabPanel>
//           <TabPanel value={value} index={1}>
//             {/* Your content for "Leaderboard" */}
//           </TabPanel>
//           <TabPanel value={value} index={2}>
//             {/* Your content for "Onchain Learderboard" */}
//           </TabPanel>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// import React, { useState } from 'react';
// import { Box, Container, Typography, Tab, Tabs } from '@mui/material';

// export default function AfterLogin() {
//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Container maxWidth="md">
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           marginTop: 8,
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           After Login
//         </Typography>
//         <Box sx={{ width: '100%', mt: 3 }}>
//           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//             <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//               <Tab label="My Stats" />
//               <Tab label="Leaderboard" />
//               <Tab label="Onchain Learderboard" />
//             </Tabs>
//           </Box>
//           <TabPanel value={value} index={0}>
//             {/* Your content for "My Stats" */}
//           </TabPanel>
//           <TabPanel value={value} index={1}>
//             {/* Your content for "Leaderboard" */}
//           </TabPanel>
//           <TabPanel value={value} index={2}>
//             {/* Your content for "Onchain Learderboard" */}
//           </TabPanel>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }
