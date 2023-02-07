import {
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
import { dataEdited } from "./Local";
import ActualEdit from "./ActualEdit";

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

function Editmodal({ open1, setOpen1, editselected, index }) {
  const handleClose1 = () => setOpen1(false);
  // const [openedit, setOpenedit] = useState(false);
  const [data1, setData1] = useState(editselected);

  const [openedited, setOpenedited] = useState(false);
  const handleedited = () => setOpenedited(true);

  useEffect(() => {
    setData1({ ...editselected });
  }, [editselected]);

  let handleInputChange = (e) => {
    const { name, value } = e.target;
    setData1({ ...data1, [name]: value });
  };

  return (
    <div>
      <Modal open={open1} onClose={handleClose1}>
        <Fade in={open1}>
          <Paper sx={style}>
            <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
              Edit Member
            </Typography>
            <Grid container display={"block"} textAlign={"center"} spacing={4}>
              <Grid item>
                <TextField
                  variant="filled"
                  value={data1.name}
                  label="Name"
                  name="name"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="filled"
                  value={data1.username}
                  label="Username"
                  name="username"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="filled"
                  value={data1.email}
                  label="Email"
                  name="email"
                  onChange={handleInputChange}
                />
                <br />
              </Grid>
              <Grid item>
                <TextField
                  variant="filled"
                  value={data1.phone}
                  label="Phone"
                  name="phone"
                  onChange={handleInputChange}
                />
                <br />
              </Grid>
              <Grid item display={"flex"} justifyContent="space-evenly">
                <Button
                  variant="contained"
                  color="warning"
                  size="small"
                  onClick={() => {
                    
                    handleedited();
                  }}>
                  Edit
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClose1}
                  color="error"
                  size="small">
                  Close
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Modal>
      {openedited && (
        <ActualEdit openedited={openedited} setOpenedited={setOpenedited} data1={data1} index={index} handleClose1={handleClose1} />
      )}
    </div>
  );
}
export default Editmodal;
