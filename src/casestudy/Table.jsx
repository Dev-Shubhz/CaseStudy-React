import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./NavBar";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";
import RemoveCircleOutlineTwoToneIcon from "@mui/icons-material/RemoveCircleOutlineTwoTone";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import AddModal from "./Modal/AddModal";
import Editmodal from "./Modal/Editmodal";
import { removedata } from "./Modal/Local";
import DeletedModal from "./Modal/ActualDelete";

function Table2() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const [editselected, setEditselected] = useState({});
  const [index, setIndex] = useState();

  const [opendeleted, setOpendeleted] = useState(false);
  const handledeleted = () => setOpendeleted(true);

  

  let local = JSON.parse(localStorage.getItem("input"));

  let Modaledit = (data) => {
    setEditselected(data);
  };
  let Index = (index) => {
    setIndex(index);
  };

  return (
    <>
      <ResponsiveAppBar />
      <h1 className="mt-3 mb-3" style={{ borderBottom: "2px solid black" }}>
        Candidate Records
      </h1>
      <TableContainer
        component={Paper}
        sx={{ width: { md: "80%" }, ml: { md: "10%" }, textAlign: "center" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ color: "success" }}>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">
                <Button variant="outlined" onClick={handleOpen}>
                  <AddCircleOutlineTwoToneIcon sx={{ mr: 1 }} />
                  add
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {local.map((row, index) => (
              <TableRow key={index} id={index}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.username}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mr: 2 }}
                    color="warning"
                    onClick={() => {
                      Modaledit(row);
                      Index(index);
                      handleOpen1();
                    }}>
                    <ModeEditOutlineTwoToneIcon sx={{ mr: 1 }} /> edit
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="error"
                    onClick={(e) => {
                      handledeleted();
                    }}>
                    <RemoveCircleOutlineTwoToneIcon sx={{ mr: 1 }} />
                    remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddModal open={open} setOpen={setOpen} />
      <Editmodal
        open1={open1}
        setOpen1={setOpen1}
        editselected={editselected}
        index={index}
      />

      <DeletedModal opendeleted={opendeleted} setOpendeleted={setOpendeleted} />
    </>
  );
}

export default Table2;
