import React from "react";

export default function Useform(initValues) {
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors
  };
}
