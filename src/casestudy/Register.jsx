import { Title } from "@mui/icons-material";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


function Register() {

const navigate=useNavigate();


  const [cont, setCont] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    role: "users",
  });

  let register = async () => {
    
    let response = await axios.post(
      "https://products-jwt.onrender.com/users/register",cont
    );
    let data = JSON.stringify(response);
    localStorage.setItem(data)
  };

  //function to handle input
  let HandleChange = (e) => {
    let name = e.target.name;
    let values = e.target.value;
    setCont({ ...cont, [name]: values });
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        justifyContent: "center",
        width: { xs: "100%", md: "50%" },
        paddingBottom: "30px",
        marginLeft: { md: "25%" },
        marginTop: "100px",
      }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bolder", color: "GrayText", pt: "20px" }}>
        Candidate Registration
      </Typography>
      <br />
      <div>
        <TextField
          variant="outlined"
          label="First Name"
          sx={{ width: "60%" }}
          value={cont.fname}
          name="fname"
          onChange={HandleChange}
          autoComplete="off"
        />
      </div>
      <br />

      <div>
        <TextField
          variant="outlined"
          label="Last Name"
          value={cont.lname}
          sx={{ width: "60%" }}
          name="lname"
          onChange={HandleChange}
          autoComplete="off"
        />
      </div>
      <br />
      <div>
        <TextField
        
          variant="outlined"
          label="Email"
          value={cont.email}
          sx={{ width: "60%" }}
          name="email"
          onChange={HandleChange}
          autoComplete="off"
        />
      </div>
      <br />
      <div>
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          value={cont.password}
          name="password"
          sx={{ width: "60%" }}
          onChange={HandleChange}
          autoComplete="off"
        />
        <br />
        <Button variant="contained" className="mt-5" sx={{ px: "30px" }} 
        onClick={()=>{
          register();
          setCont({
            fname: "",
            lname: "",
            email: "",
            password: "",
            role: "users",
          });
          navigate("/")
        }}>Register</Button>
        <br />
        <br />
        <Typography>
        Already Have An Account? <Link to={"/"}>Login</Link>
        </Typography>
             
        
      </div>
    </Paper>
  );
}

export default Register;
