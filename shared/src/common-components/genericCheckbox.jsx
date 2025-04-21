import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React from "react";

const GenericCheckbox = ({
  list = [],
  name,
  value = [],
  onChange,
  sx,
  className,
  inputProps,
}) => {
  const isChecked = (item) =>
    value?.some((val) => val?.toString() === item?.value?.toString());

  return (
    <FormGroup sx={sx}>
      {list.map((item, index) => (
        <FormControlLabel
          name={name}
          key={`checkbox-${index}`}
          sx={{
            margin: className === "editable-input" ? "14px 0px 14px 0px" : undefined,
          }}
          control={
            <Checkbox
              inputProps={inputProps}
              value={item?.value}
              className={className}
              defaultChecked={isChecked(item)}
              onChange={onChange}
            />
          }
          label={
            className === "editable-input" && !isChecked(item) ? "" : item?.label
          }
        />
      ))}
    </FormGroup>
  );
};

export default GenericCheckbox;