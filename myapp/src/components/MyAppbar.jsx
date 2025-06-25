import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar'; // Import MUI AppBar
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export default function MyAppBar() { // Rename your component
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/login">
            <Button style={{ color: "yellow" }}>Login</Button>
          </Link>
          <Link to="/signup">
            <Button style={{ color: "yellow" }}>Signup</Button>
          </Link>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
