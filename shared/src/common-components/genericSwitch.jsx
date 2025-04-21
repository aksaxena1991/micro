import { FormControlLabel, Stack, Switch, Typography } from "@mui/material";

const GenericSwitch = (props) => {
  const { styles, start, end, label, value } = props;

  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      <Typography color={"#000"} variant="subtitle2">
        {start}
      </Typography>
      <FormControlLabel
        control={
          <Switch
            sx={{ m: 0.4, ...styles }}
            {...props}
            defaultChecked={value}
          />
        }
        label={label}
      />
      <Typography color={"#000"} variant="subtitle2">
        {end}
      </Typography>
    </Stack>
  );
};
export default GenericSwitch;
