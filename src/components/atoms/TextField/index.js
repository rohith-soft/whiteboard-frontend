import React from "react";
import { TextField as MuiTextField } from "@material-ui/core";
import PropTypes from "prop-types";

const TextField = ({
  label,
  value,
  multiline,
  rows,
  rowsMax,
  defaultValue,
  placeholder,
  handleChange,
  variant,
  margin,
  shrink,
  ...restProps
}) => {
  return (
    <MuiTextField
      margin={margin}
      label={label}
      value={value}
      multiline={multiline}
      placeholder={placeholder}
      defaultValue={defaultValue}
      rows={rows}
      rowsMax={rowsMax}
      onChange={handleChange}
      variant={variant}
      InputLabelProps={{
        shrink: shrink && true,
      }}
      {...restProps}
    />
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  rowsMax: PropTypes.number,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

TextField.defaultProps = {
  multiline: false,
};

export default TextField;
