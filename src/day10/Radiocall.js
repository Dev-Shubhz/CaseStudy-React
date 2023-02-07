import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
  import React from "react";
  
  export default function Radiocall(props) {
    const { name, label, value, onChange, items } = props;
  
    return (
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup row name={name} value={value} onChange={onChange}>
          {items.map((item) => (
            <FormControlLabel
              key={item.id}
              value={item.id}
              control={<Radio />}
              label={item.title}
              
            />
          ))}
        </RadioGroup>
      </FormControl>
      
    );
  }
  
