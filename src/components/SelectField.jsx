import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import {
  CategoryChangeHandler,
  DifficultyChangeHandler,
  TypeChangeHandler,
} from "../redux/action";

const SelectField = (props) => {
  const { label, options } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    switch (label) {
      case "Category":
        dispatch(CategoryChangeHandler(e.target.value));
        break;
      case "Difficulty":
        dispatch(DifficultyChangeHandler(e.target.value));
        break;
      case "Type":
        dispatch(TypeChangeHandler(e.target.value));
        break;
      default:
        return;
    }
  };
  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
