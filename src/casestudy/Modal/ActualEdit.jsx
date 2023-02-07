import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { dataEdited } from "./Local";
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

export default function actualEdit({
  openedited,
  setOpenedited,
  data1,
  index,
  handleClose1
}) {
  const handleClose = () => setOpenedited(false);
  return (
    <div>
      <Modal
        open={openedited}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <Typography mb={3}>Are You Want to Edit Candidate Data ?</Typography>
          <Grid display={"flex"} justifyContent="space-evenly">
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                dataEdited(data1, index);
                handleClose();
                handleClose1();
                // setOpenedited()
              }}>
              Yes
            </Button>
            <Button variant="outlined" color="error" onClick={handleClose}>
              no
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
