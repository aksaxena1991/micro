import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const GenericAutocomplete = ({ options, label, onChange, value, ...otherProps }) => {
  return (
    <Autocomplete
      freeSolo
      options={options}
      {...otherProps}
      size="small"
      getOptionLabel={(option) => (typeof option === "string" ? option : option.label || "")}
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === "string") {
          onChange(newValue);
        } else if (newValue && newValue.label) {
          onChange(newValue.label);
        } else {
          onChange("");
        }
      }}
      renderInput={(params) => (
        <TextField 
          {...params} 
          label={label} 
          variant="outlined" 
          inputProps={{ ...params.inputProps }} // Ensure inputProps are properly passed
        />
      )}
    />
  );
};

export default GenericAutocomplete;