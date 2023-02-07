import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Table,
} from "react-bootstrap";
import axios from "axios";
// import useForm from "./customvalidate/Useform1";
// import Validate1 from "./customvalidate/Validate1";

import { Grid } from "@mui/material";
import { fontWeight } from "@mui/system";
function CreateModal({ open, setOpen, fetchapi }) {
  const [formData, setFormData] = useState({
    pName: "",
    pPrice: "",
    pDesc: "",
    pImg: "",
  });
  let ifError = () => {
    if (formData == "") {
      alert("All Details Are Necessary");
    }
  };
  async function AddonClick() {
    console.log("hiiii", "..............");
    let AddContent = await axios.post(
      "https://p-9x7e.onrender.com/products/add-product",
      formData
    );
    if (AddContent.data.error) {
      alert("Something Went Wrong!!!");
    } else {
      fetchapi();
      alert(AddContent.data.message);
    }
  }

  let closeModal = () => {
    setOpen(false);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Modal show={open}>
        
        <ModalHeader style={{ fontSize: "20px", fontWeight: "bolder" }}>
          Add Product
          <div className="ms-auto me-3">
          <Button
            variant="danger"
            size="md"
            className="px-5"
            onClick={closeModal}>
            X
          </Button>
        </div>
        </ModalHeader>

        <ModalBody>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="3" lg="6" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "100%", padding: "8px" }}
                  placeholder="Insert Product Name"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, pName: e.target.value });
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter valid Product Name
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" lg="6" controlId="validationCustom02">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="pPrice"
                  style={{ width: "100%", padding: "8px" }}
                  placeholder="Insert Product Price"
                  onChange={(e) => {
                    setFormData({ ...formData, pPrice: e.target.value });
                  }}
                />

                <Form.Control.Feedback type="invalid">
                  Please enter valid Price
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="3" lg="6" controlId="validationCustom03">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="pDesc"
                  style={{ width: "100%", padding: "8px" }}
                  placeholder="Insert Product Description"
                  onChange={(e) => {
                    setFormData({ ...formData, pDesc: e.target.value });
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  This field is required
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" lg="6" controlId="validationCustom03">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="pDesc"
                  style={{ width: "100%", padding: "8px" }}
                  placeholder="Insert Image URL"
                  onChange={(e) => {
                    setFormData({ ...formData, pImg: e.target.value });
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Enter valid URL
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <div>
              <Button
                type="submit"
                className="mx-3"
                onClick={() => {
                  AddonClick();
                }}>
                Submit
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default CreateModal;
