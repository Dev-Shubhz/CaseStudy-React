import { Window } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Fade,
  FormControl,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { addData } from "./Local";
// import Table2 from "../Table";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddModal({ open, setOpen }) {
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  let handleInputChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const handleClose = () => {
    setOpen(false);
    setInput({
      name: "",
      username: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Paper sx={style}>
            <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
              Add Member
            </Typography>
            <Grid container display={"block"} textAlign={"center"} spacing={4}>
              <Grid item>
                <TextField
                  name="name"
                  autoFocus
                  label="Name"
                  onChange={handleInputChange}
                  value={input.name}
                />
              </Grid>
              <Grid item>
                <TextField
                  name="username"
                  label="Username"
                  onChange={handleInputChange}
                  value={input.username}
                />
              </Grid>
              <Grid item>
                <TextField
                  name="email"
                  label="Email"
                  onChange={handleInputChange}
                  value={input.email}
                />
              </Grid>
              <Grid item>
                <TextField
                  name="phone"
                  label="Phone"
                  onChange={handleInputChange}
                  value={input.phone}
                />
              </Grid>
              <Grid item display={"flex"} justifyContent="space-evenly">
                <Button
                  onClick={() => {
                    addData(input);
                    handleClose();
                  }}
                  variant="contained"
                  size="small">
                  Add
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleClose}
                  size="small">
                  Close
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}

// <Table1 input={input} setInput={setInput} />
