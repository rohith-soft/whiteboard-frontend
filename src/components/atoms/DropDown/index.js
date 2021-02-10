import React from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 360,
  },
}));
const Dropdown = ({ options, label, value, handleSelectChange, variant }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    handleSelectChange(event.target.value);
  };

  return (
    <>
      <FormControl className={classes.formControl} variant={variant}>
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={handleChange}>
          {options &&
            options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Dropdown;
