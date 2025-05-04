import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PaymentsIcon from "@mui/icons-material/Payments";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  Box,
  Button,
  Card,
  CardContent,
  Drawer,
  Grid,
  IconButton,
  StepButton,
  StepLabel,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useState } from "react";
import AddressForm from "../../../forms/address";
import PaymentForm from "../../../forms/payment";
import ReviewOrder from "../../../forms/review";
import OBJ from "../../../languages/fr.json";
import ProductInfo from "./productInfo/ProductInfo";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      },
    },
  ],
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <GroupAddIcon />,
    2: <PaymentsIcon />,
    3: <VerifiedIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = ["Customer Details", "Payment Details", "Review Your Order"];

const Checkout = () => {
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <ReviewOrder />;
      default:
        throw new Error("Unknown step");
    }
  };
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = () => {
    return steps.length;
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: "auto", px: 3, pb: 3, pt: 8 }} role="presentation">
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{ position: "absolute", right: 8, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <ProductInfo totalPrice={"asas"} />
    </Box>
  );
  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: { md: 4, xs: 2 },

        height: {
          md: "calc(100vh - var(--template-frame-height, 0px))",
        },
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",

          width: "100%",
          backgroundColor: "background.paper",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",

              borderRight: { sm: "none", md: "1px solid" },
              borderColor: { sm: "none", md: "divider" },
            }}
          >
            <Card
              sx={{
                width: "100%",
              }}
            >
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <Typography variant="subtitle2" gutterBottom>
                      Selected products
                    </Typography>
                    <Typography variant="body1">{"$134.98"}</Typography>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Button
                      variant="text"
                      endIcon={<ExpandMoreRoundedIcon />}
                      onClick={toggleDrawer(true)}
                    >
                      View details
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Drawer
              open={open}
              anchor="top"
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                  backgroundImage: "none",
                  backgroundColor: "background.paper",
                },
              }}
            >
              {DrawerList}
            </Drawer>
          </Grid>
          <Grid
            item
            md={12}
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              backgroundColor: (theme) => {
                return "rgba(205,205,150,0.15)";
              },
              borderRight: { sm: "none", md: "1px solid" },
              borderColor: { sm: "none", md: "ButtonFace" },
              alignItems: "start",
            }}
          >
            <ProductInfo totalPrice={144.099} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Stack>
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
              >
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                      <StepLabel StepIconComponent={ColorlibStepIcon}>
                        {label}
                      </StepLabel>
                    </StepButton>
                  </Step>
                ))}
              </Stepper>
            </Stack>
          </Grid>

          {activeStep === steps.length ? (
            <Grid item xs={12} md={12}>
              <Stack spacing={2} useFlexGap>
                <Typography variant="h2">📦</Typography>
                <Typography variant="h5">Thank you for your order!</Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Your order number is
                  <strong>&nbsp;#140396</strong>. We have emailed your order
                  confirmation and will update you once its shipped.
                </Typography>

                <Button
                  variant="outlined"
                  sx={{ alignSelf: "start", width: { xs: "100%", sm: "auto" } }}
                >
                  Go to login
                </Button>
              </Stack>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2">
                    {OBJ.STEPPER_TITLE_LABEL[activeStep]}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {getStepContent(activeStep)}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", justifyContent: "start" }}
                >
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="outlined"
                  >
                    {OBJ.BACK_LABEL}
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  <Button onClick={handleNext} variant="outlined">
                    {activeStep === totalSteps() - 1
                      ? OBJ.SUBMIT_LABEL
                      : OBJ.NEXT_LABEL}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Checkout;
