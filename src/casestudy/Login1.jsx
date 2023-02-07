import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    margintop: 20,
    marginBottom: 20,
    display: "block",
  },
});
function Login1() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [emailerrors, setemailErrors] = useState(false);
  const [passerrors, setpassErrors] = useState(false);
  const classes = useStyles();

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setemailErrors(false);

    if (data.email == "") {
      setemailErrors(true);
    }

    if (data.email && data.password) {
      console.log(data.email, data.password);
    }
  };

  const handleSubmit1 = (e1) => {
    e1.preventDefault();
    setpassErrors(false);

    if (data.password == "") {
      setpassErrors(true);
    }

    if (data.email && data.password) {
      console.log(data.email, data.password);
    }
  };

  let Login = async () => {
    try {
      let res = await axios.post(
        "https://products-jwt.onrender.com/users/login",
        data
      );
      let dt = JSON.stringify(res);
      localStorage.setItem("JWT", dt);
      if (localStorage.getItem("JWT")) {
        navigate("/home");
      }
    } catch (error) {
      alert("invalid data");
    }
  };

  const inputchange = (s1) => {
    let name = s1.target.name;
    let value = s1.target.value;
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <Paper
        sx={{
          justifyContent: "center",
          width: { xs: "100%", md: "50%" },
          paddingBottom: "30px",
          marginLeft: { md: "25%" },
          marginTop: "100px",
          paddingTop: "20px",
          backgroundColor: "",
        }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bolder",
            marginTop: "30px",
            marginBottom: "50px",
          }}>
          Candidate Login
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid>
            <TextField
              className={classes.field}
              variant="outlined"
              label="Email"
              name="email"
              value={data.email}
              onChange={inputchange}
              sx={{ width: "40%" }}
              error={emailerrors}
              helperText={emailerrors ? "this field is required" : ""}
              onKeyUp={handleSubmit}
            />
          </Grid>

          <br />
          <br />
          <Grid>
            <TextField
              variant="outlined"
              label="Password"
              type={"password"}
              name="password"
              value={data.password}
              onChange={inputchange}
              sx={{ width: "40%" }}
              error={passerrors}
              helperText={passerrors ? "this field is required" : ""}
              onKeyUp={handleSubmit1}
            />
          </Grid>

          <br />
          <br />
          <Button
            variant="contained"
            className="mt-2"
            sx={{ px: "50px" }}
            onClick={() => {
              Login();
              setData({
                email: "",
                password: "",
              });
            }}>
            Login
          </Button>

          <br />
          <br />
          <Typography>OR</Typography>
          <Typography>
            Create a new Account Click to <Link to={"/register"}>Register</Link>
          </Typography>
        </form>
      </Paper>
    </div>
  );
}
export default Login1;
