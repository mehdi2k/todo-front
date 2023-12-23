import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Tasks from '../tasks/Tasks';
import NewTask from '../newTasks/NewTask';
;

export default function ButtonAppBar() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/new-task">
              New Task
            </Button>
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Tasks
            </Button>
            <Button color="inherit" component={Link} to="/new-task">
              New Tasks
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/new-task" element={<NewTask />} />
        </Routes>
      </Box>
    </Router>
  );
}
