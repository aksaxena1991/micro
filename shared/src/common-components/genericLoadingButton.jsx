import LoadingButton from "@mui/lab/LoadingButton";

const GenericLoadingButton = (props) => {
  const { children, sx } = props;
  return (
    <LoadingButton
      variant="contained"
      sx={{ background: (theme) => theme.palette.primary.dark, ...sx }}
      {...props}
    >
      {children}
    </LoadingButton>
  );
};
export default GenericLoadingButton;
