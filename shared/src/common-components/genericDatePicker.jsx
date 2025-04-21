import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import nl from "dayjs/locale/nl";
import React from "react";
const GenericDatePicker = ({ field, form, ...props }) => {
  const { setFieldValue, setFieldTouched } = form;
  const { label } = props;

  return (
    <LocalizationProvider locale={nl} dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={field.value}
        onChange={(date) => {
          setFieldValue(field.name, date);
        }}
        onBlur={() => {
          setFieldTouched(field.name, true);
        }}
        slotProps={{ textField: { size: "small", fullWidth: true } }}
        {...props}
      />
    </LocalizationProvider>
  );
};

export default GenericDatePicker;
