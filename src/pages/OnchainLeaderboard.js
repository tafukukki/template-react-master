import * as React from 'react';
import { Grid, List, ListItem, ListItemText, Box, Typography } from '@mui/material';

const players = [
  { id: 1, firstName: 'John', lastName: 'Doe', score: 35 },
  { id: 2, firstName: 'Jane', lastName: 'Doe', score: 42 },
  // More players here...
];

export default function OnchainLeaderBoard() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <Typography variant="h6"sx={{ color: '#4A4A4A' }} align='center'>Wallet Id</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6"sx={{ color: '#4A4A4A' }} align='center'>Score</Typography>
        </Grid>
        <Grid item xs={4}>
          {/* This Grid item is here just to maintain the structure. */}
        </Grid>
      </Grid>
      <List>
        {players.map((player) => (
          <ListItem key={player.id}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={4}>
                <ListItemText primary={`${player.firstName} ${player.lastName}`} sx={{ color: '#4A4A4A' }}align="center" />
              </Grid>
              <Grid item xs={4}>
                <ListItemText primary={player.score}sx={{ color: '#4A4A4A' }} align="center" />
              </Grid>
              <Grid item xs={4}>
                {/* No submit button for onchain leaderboard */}
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
