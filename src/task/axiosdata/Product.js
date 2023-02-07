import { Button, Table } from "@mui/material";
import axios from "axios";

import React, { useEffect, useState } from "react";
import CreateModal from "./CreateModal";
import Edited from "./Edited";

function Product() {
  const [product, setProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  let [selectedprod, setselectedprod] = useState({});

  console.log(product);
  useEffect(() => {
    fetchapi();
  }, []);

  let fetchapi = async () => {
    let fetchData = await axios.get(
      "https://p-9x7e.onrender.com/products/products"
    );
    if (fetchData.data.error) {
      alert("Data Not Found");
    } else {
      setProduct(fetchData.data.data);
    }
  };
  let DeleteProd = async (id) => {
    try {
      let Resdata = await axios.delete(
        `https://p-9x7e.onrender.com/products/delete-product/${id}`
      );
      if (Resdata.data.error) {
        alert("Something Went Wrong!!!");
      } else {
        alert(Resdata.data.message);
        fetchapi();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  let OpenModal = () => {
    setOpen(true);
  };
  let ModalEditOpen = (data) => {
    setOpenEdit(true);
    console.log(openEdit);
    setselectedprod(data);
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>
              <Button onClick={OpenModal} variant="contained">
                Add Product
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {product.map((element) => {
            return (
              <tr key={element._id}>
                <td>{element._id}</td>
                <td>{element.pName}</td>
                <td>{element.pPrice}</td>
                <td>{element.pDesc}</td>
                <td>
                  <img src={element.pImg} height="150rem" width="150rem" />
                </td>
                <td>
                  <Button
                    onClick={() => {
                      ModalEditOpen(element);
                    }}
                    variant="contained"
                    color="primary">
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      DeleteProd(element._id);
                    }}
                    className="mx-2"
                    variant="contained"
                    color="error">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {open && (
        <CreateModal
          product={product}
          setProduct={setProduct}
          open={open}
          setOpen={setOpen}
          fetchapi={fetchapi}
        />
      )}
      {openEdit && (
        <Edited
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
          setselectedprod={setselectedprod}
          selectedprod={selectedprod}
          fetchapi={fetchapi}
        />
      )}
    </div>
  );
}

export default Product;
