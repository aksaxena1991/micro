import { FormControl, FormControlLabel } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import * as React from "react";

const GenericRadio = ({
  options,
  name,
  groupLabel,
  orientation,
  value,
  inputProps, // Extract inputProps separately if needed
  ...rest
}) => {
  return (
    <FormControl sx={{ fontWeight: "450" }}>
      {groupLabel && (
        <FormLabel id={`${name}-radio-group-label`}>{groupLabel}</FormLabel>
      )}
      <RadioGroup
        row={orientation === "row"}
        aria-labelledby={`${name}-radio-group-label`}
        name={name}
        value={value}
        {...rest} // Ensure that only valid props are spread
      >
        {options?.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.value}
            control={<Radio inputProps={inputProps} />} // Pass inputProps explicitly
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default GenericRadio;
