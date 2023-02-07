import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";

function Edited({ fetchapi, selectedprod, setOpenEdit, openEdit }) {
  const [editedProd, setEditedProd] = useState(selectedprod);
  useEffect(() => {
    setEditedProd({ ...selectedprod });
  }, [selectedprod]);

  let closeModal = () => {
    setOpenEdit(false);
    setEditedProd({
      pName: "",
      pPrice: "",
      pDesc: "",
      pImg: "",
    });
  };
  let editFunct = async () => {
    try {
      let editresult = await axios.put(
        `https://p-9x7e.onrender.com/products/edit-product/${selectedprod._id}`,
        editedProd
      );
      if (editresult.data.error) {
        alert("Something Went Wrong!!!");
      } else {
        fetchapi();
        closeModal();
        alert(editresult.data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  console.log(selectedprod);

  return (
    <div>
      <Modal show={openEdit}>
        {console.log(openEdit, ".......")}
        <ModalHeader>Edit the Product</ModalHeader>
        <ModalBody>
          <Form>
          <Grid container>
          <Grid item sm={5} mr={1}>
            <div className="mb-2">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={editedProd.pName}
                placeholder="Insert Product Name"
                onChange={(e) => {
                  setEditedProd({ ...editedProd, pName: e.target.value });
                }}></input>
            </div>

            <div className="mb-2">
              <label>Price</label>
              <input
                type="text"
                name="name"
                value={editedProd.pPrice}
                placeholder="Insert Product Price"
                onChange={(e) => {
                  setEditedProd({ ...editedProd, pPrice: e.target.value });
                }}></input>
            </div>
            </Grid>
            <Grid item xs={6}>
            <div className="mb-2">
              <label>Description</label>
              <input
                type="text"
                name="name"
                value={editedProd.pDesc}
                placeholder="Insert Product Description"
                onChange={(e) => {
                  setEditedProd({ ...editedProd, pDesc: e.target.value });
                }}></input>
            </div>
            <div className="mb-2">
              <label>Image URL</label>
              <input
                type="text"
                name="imageUrl"
                value={editedProd.pImg}
                placeholder="Insert Image Url"
                onChange={(e) => {
                  setEditedProd({ ...editedProd, pImg: e.target.value });
                }}></input>
            </div>
            </Grid>
            <div>
              <Button onClick={editFunct} className="mx-3">
                Update
              </Button>
              <Button onClick={closeModal} className="mx-3">
                Close
              </Button>
            </div>
            </Grid>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Edited;
