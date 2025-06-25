import React from 'react'
import { Button, TextField } from '@mui/material'
const Register = () => {
  return (
    <div>Register
      <h1>Register</h1>
      <TextField id="outlined-basic" label="Email" variant="outlined" /> <br   />
            <br />
            
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" /><br /> <br />
            <Button variant="contained">Register</Button>
    </div>
  )
}

export default Register;