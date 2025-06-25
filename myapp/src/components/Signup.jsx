import React from 'react'
import { Button, TextField } from '@mui/material'
const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
     <TextField id="outlined-basic" label="Email" variant="outlined" /> <br   />
           <br />
           
           <TextField id="outlined-basic" label="Password" variant="outlined" type="password" /><br /> <br />
           <Button variant="contained">Signup</Button>
    </div>
  )
}

export default Signup