import * as React from 'react';
import { Grid, List, ListItem, ListItemText, Button, Box, Typography } from '@mui/material';

const players = [
  { id: 1, firstName: 'John', lastName: 'Doe', score: 35 },
  { id: 2, firstName: 'Jane', lastName: 'Doe', score: 42 },
  // More players here...
];

export default function MyStats() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
     
      <Grid container justifyContent="left" alignItems="center">
        <Grid item xs={4}>
          <Typography variant="h6" align='left' sx={{ color: '#4A4A4A' }}>Name</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" align='left' sx={{ color: '#4A4A4A' }}>Score</Typography>
        </Grid>
        <Grid item xs={4}>
          {/* This Grid item is here just to maintain the structure. */}
        </Grid>
      </Grid>
      <List>
        {players.map((player) => (
          <ListItem key={player.id}>
            <Grid container justifyContent="left" alignItems="center">
              <Grid item xs={4}>
                <ListItemText primary={`${player.firstName} ${player.lastName}`} sx={{ color: '#4A4A4A' }} align="left" />
              </Grid>
              <Grid item xs={4}>
                <ListItemText primary={player.score} sx={{ color: '#4A4A4A' }} align="left" />
              </Grid>
              <Grid item xs={4}>
                <Box display="flex" justifyContent="center">
                  <Button variant="contained" 
                          style={{
                            background: "linear-gradient(to right, #886BF2, #977EF2, #9E91F2)",
                            color: 'white',
                            width: "90%"
                          }}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
