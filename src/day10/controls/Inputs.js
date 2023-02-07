import { TextField } from "@mui/material";
import React from "react";

function Inputs(props) {
  const { name, label, value, onChange } = props;

  return (
    <TextField sx={{width:'80%',mb:3}}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
    />
  );
}

export default Inputs;
