import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import React, { Fragment } from "react";

const GenericDateTimePicker = (props) => {
  const { styles, label, defaultValue } = props;

  return (
    <Fragment>
      <DateTimePicker
        defaultValue={defaultValue}
        label={label}
        sx={{ ...styles }}
        {...props}
        slotProps={{ textField: { size: "small", fullWidth: true } }}
      />
    </Fragment>
  );
};
export default GenericDateTimePicker;
