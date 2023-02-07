import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { removedata } from "./Local";
import { useState } from "react";

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

export default function DeletedModal({ opendeleted, setOpendeleted }) {
  const handleClose = () => setOpendeleted(false);
  const [index, setIndex] =useState();
  const [first, setfirst] = useState(false);

  return (
    <div>
      <Modal
        keepMounted
        open={opendeleted}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <Typography mb={3} ml={3} >
            Are You Want to Delete Candidate Data ?
          </Typography>
          <Grid display={"flex"} justifyContent="space-evenly">
            <Button variant="contained" color="error" onClick={()=>{removedata(index);setfirst(!first); handleClose()}} >
              Yes
            </Button>
            <Button variant="contained" color="primary" onClick={handleClose}>
              no
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
