import { Grid,} from '@mui/material';
import React, { useState } from 'react'
import BasicModal from './BasicModal'
import Inputs from './controls/Inputs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Radiogroup from './Radiocall';

const genderItems=[
  {id:"male",title:"Male"},
  {id:"female",title:"Female"},
  {id:"other",title:"Other"}
];

const initialFValues={
  id:0,
  fullName:"",
  email:"",
  mobile:"",
  city:"",
  gender:'male',
  hireDate:new Date(),
}
 function Registration() {
  const [values, setValue] = useState(initialFValues)
  const handleInputChange=(e)=>{
    const{name,value}=e.target;
    setValue({
      ...values,
      [name]:value,
    });
  }
  return (
    <form autoComplete='off'>
    <Grid container >
    <Grid item xs={12} md={6}>
    <Inputs
    name="fullName"
    label="Full Name"
    value={values.name}
    onChange={handleInputChange}
    />
    <Inputs
    name="email"
    label="Email"
    value={values.email}
    onChange={handleInputChange}
    />
    <Inputs
    name="mobile"
    label="Mobile"
    value={values.mobile}
    onChange={handleInputChange}
    />
    <Inputs
    name="city"
    label="City"
    value={values.city}
    onChange={handleInputChange}
    />
    </Grid>
    <Grid item xs={12} md={6}>
    <Radiogroup
    name='gender'
    label='Gender'
    value={values.gender}
    onChange={handleInputChange}
    items={genderItems}
    />
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DatePicker
        label="Basic example"
        value={values.hireDate}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </Grid>
    </Grid>
    </form>
  )
}
export default Registration 

