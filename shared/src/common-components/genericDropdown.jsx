import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const GenericDropdown = (props) => {
  const { label, data = [], selected = {}, error, onChange, onKeyUp } = props;
  
  return (
    <FormControl fullWidth size="small" error={error}>
      <InputLabel>{label}</InputLabel>
      <Select
        fullWidth
        {...props}
        onChange={onChange}
        onSelectCapture={onChange}
        onKeyUp={onKeyUp}
        defaultValue={selected}
      >
        {data?.map((item, index) => (
          <MenuItem value={item.value} key={`${item.value}-${index}`}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GenericDropdown;
