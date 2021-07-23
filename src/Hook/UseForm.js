import { useState } from "react";

export const UseForm = ({ initialState = {search: ''} }) => {
  const [value, setvalue] = useState(initialState);

  const handleChange = ({ target }) => {
    setvalue({
      ...value,
      [target.name]: target.value,
    });
  };

  return { value, handleChange };
};
