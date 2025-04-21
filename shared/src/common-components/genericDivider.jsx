import { Divider } from "@mui/material";

const GenericDivider = () => {
  return (
    <Divider
      variant="fullWidth"
      textAlign="center"
      light={true}
      flexItem={true}
      sx={{
        width: "100%",
        border: (theme) => `1px solid ${theme.palette.primary.light}`,
      }}
    />
  );
};
export default GenericDivider;
