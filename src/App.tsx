import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { Container, MenuItem, Select } from '@mui/material';


function App() {
  return (
    <div >
     <Button variant="contained">Hello World</Button>
     <br></br>
     <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={22}
    label="Age"
    onChange={(e)=>console.log(e)}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
  <br></br>
  <Container fixed />

    </div>
  );
}

export default App;
