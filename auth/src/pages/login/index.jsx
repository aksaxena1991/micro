import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { memo, useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FaEye, FaEyeSlash, FaStore, FaUserShield } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import image from "../../../../src/Assets/Images/loginImg.svg";
import { useNavigate } from "react-router-dom";
import Logoimg from "shared/epackbookLogoBlue.svg";

import CompanyDropdownComponent from "shared/companyDropdownComponent";
import OBJ from "shared/fr.json";
import GenericInput from "shared/genericInput";
import GenericLoadingButton from "shared/genericLoadingButton";
import { useAuth } from "../../hooks/useAuth";
import { getAuthState, getRoleState } from "../../store/selectors";
import {
  requestAuthDetails,
  requestLogin,
  requestVerifyOTP,
  resetAuth,
} from "../../store/slices/authSlice";
import { requestCurrentCompany } from "../../store/slices/companySlice";
import { requestAllRole } from "../../store/slices/roleSlice";
import {
  authInitial,
  employeeAuthSchema,
  vendorAuthSchema,
} from "../../validators/auth-validation";

const OTPComponent = memo(
  ({
    otpDialogOpen,
    setOtpDialogOpen,
    OTP,
    onOTPChange,
    onVerifyOTPClick,
    mobile,
    roleID,
  }) => {
    let initialTime = 300;
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const [resendCodeClicked, setResendCodeClicked] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
      let interval;

      if (isRunning && timeLeft > 0) {
        interval = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
      } else if (timeLeft === 0) {
        setIsRunning(false);
        setTimeLeft(initialTime);
      }

      return () => clearInterval(interval);
    }, [initialTime, isRunning, timeLeft]);

    useEffect(() => {
      startTimer();
    }, []);

    const startTimer = () => {
      setIsRunning(true);
      initialTime = 300;
      setResendCodeClicked(true);
    };
    useEffect(() => {
      if (resendCodeClicked) {
        dispatch(requestLogin({ mobile, roleID }));
      }
      setResendCodeClicked(false);
    }, [dispatch, mobile, resendCodeClicked, roleID]);
    return ReactDOM.createPortal(
      <Dialog
        fullWidth
        maxWidth="xs"
        open={otpDialogOpen}
        onClose={() => setOtpDialogOpen(!otpDialogOpen)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          alignContent={"center"}
          flexDirection={"column"}
        >
          {OBJ.OTP_VERIFICATION_CODE_LABEL}
          <Typography variant="body2">{OBJ.OTP_SUBHEADING_LABEL}</Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} justifyContent="center">
            {OTP.map((digit, index) => {
              return (
                <Grid item xs={2} key={index}>
                  <GenericInput
                    fullWidth
                    id={`otp-input-${index}`}
                    value={digit}
                    onChange={(e) => onOTPChange(index, e.target.value)}
                  />
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  alignContent={"center"}
                  flexDirection={"column"}
                >
                  <CircularProgress
                    variant="determinate"
                    value={(100 * timeLeft) / initialTime}
                    size={20}
                    thickness={10}
                    color="primary"
                  />
                  <Typography variant="body2">{timeLeft}s</Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  alignContent={"center"}
                  flexDirection={"column"}
                >
                  <Typography variant="body2">
                    {OBJ.DID_NOT_RECEIVE_LABEL}
                  </Typography>
                </Grid>
                {
                  <Grid
                    item
                    xs={12}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    alignContent={"center"}
                    flexDirection={"column"}
                  >
                    <Button
                      onClick={startTimer}
                      type="button"
                      disabled={isRunning}
                    >
                      {OBJ.RESEND_CODE_LABEL}
                    </Button>
                  </Grid>
                }
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <GenericLoadingButton onClick={onVerifyOTPClick}>
            {OBJ.VERIFY_OTP}
          </GenericLoadingButton>
        </DialogActions>
      </Dialog>,
      document.body
    );
  }
);
const ForgotPasswordComponent = memo(
  ({
    isForgotPasswordOpen,
    setIsForgotPasswordOpen,
    onSendEmailClick,
    onForgotPasswordEmailChange,
  }) => {
    return ReactDOM.createPortal(
      <Dialog
        fullWidth
        maxWidth="xs"
        open={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(!isForgotPasswordOpen)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          alignContent={"center"}
          flexDirection={"column"}
        >
          {OBJ.FORGOT_PASSWORD}
          <Typography variant="body2">
            {OBJ.FORGOT_PASSWORD_SUBHEADING}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <GenericInput
                fullWidth
                variant="standard"
                label={`Enter Your ${OBJ.EMAIL_ADDRESS_LABEL}`}
                onChange={onForgotPasswordEmailChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <GenericLoadingButton onClick={onSendEmailClick}>
            {OBJ.SEND_EMAIL_LABEL}
          </GenericLoadingButton>
        </DialogActions>
      </Dialog>,
      document.body
    );
  }
);

const Login = () => {
  const { loggedIn } = useAuth();
  
  const navigation = useNavigate();
  const [loginType, setLoginType] = useState(OBJ?.VENDOR);
  const [initialValue, setInitialValue] = useState(authInitial);
  const roleState = useSelector(getRoleState);
  const authState = useSelector(getAuthState);
  const [allCompanies, setAllCompanies] = useState([]);
  const { login, authDetails, verifyOTP } = authState;
  const authId = login?.data?.id;

  const dispatch = useDispatch();
  const { allRole } = roleState;
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [roleDetails, setRoleDetails] = useState({});
  const [otpDialogOpen, setOtpDialogOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(true);
  const [OTP, setOTP] = useState(Array(6).fill(""));
  const onLoginTypeChange = (event, newType) => {
    switch (newType) {
      case OBJ?.VENDOR:
        setInitialValue({ ...authInitial, email: "", password: "" });
        setLoginType(newType);
        break;
      case OBJ?.EMPLOYEE:
        setInitialValue({ ...authInitial, mobile: "" });
        setLoginType(newType);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setOtpDialogOpen(login?.response);
    return () => {
      setOtpDialogOpen(false);
    };
  }, [login?.response]);

  useEffect(() => {
    if (verifyOTP?.response && !verifyOTP?.failed) {
      setOtpDialogOpen(false);
    }
  }, [verifyOTP?.failed, verifyOTP?.response]);

  useEffect(() => {
    dispatch(resetAuth());
  }, [dispatch]);

  const onSubmit = (values,{ resetForm }) => {
    dispatch(resetAuth());
    switch (loginType) {
      case OBJ?.VENDOR:
        dispatch(
          requestLogin({ mobile: values.mobile, roleID: roleDetails?.id })
        );

        break;
      case OBJ?.EMPLOYEE:
        dispatch(
          requestLogin({ email: values.email, password: values.password })
        );

        break;
      default:
        break;
    }
    resetForm();
  };
  const onForgotPasswordClick = () => {
    setIsForgotPasswordOpen(true);
  };
  useEffect(() => {
    if (allRole?.data?.length <= 0) {
      dispatch(requestAllRole());
    }

    setRoleDetails(
      allRole.data.find(
        (role) => role.roleName?.toLowerCase() === OBJ?.VENDOR?.toLowerCase()
      )
    );
  }, [dispatch, allRole]);

  const onVerifyOTPClick = () => {
    dispatch(resetAuth());
    dispatch(
      requestVerifyOTP({ mobile: login?.data?.mobile, otp: OTP.join("") })
    );
  };

  const onOTPChange = useCallback(
    (index, value) => {
      if (/^\d*$/.test(value) && value.length <= 1) {
        const newOtp = [...OTP];
        newOtp[index] = value;
        setOTP(newOtp);
        if (value && index < 5) {
          document.getElementById(`otp-input-${index + 1}`).focus();
        }
      }
    },
    [OTP]
  );
  useEffect(() => {
    if (verifyOTP?.response) {
      dispatch(requestAuthDetails(authId));
    }
  }, [authId, dispatch, verifyOTP?.response]);
  useEffect(() => {
    const isAdmin = OBJ.SUPER_ROLE_LIST.includes(
      authDetails?.data?.role?.roleName.toLowerCase()
    );
    if (isAdmin) {
      loggedIn();
    }
    setAllCompanies(authDetails?.data?.role?.companies || []);
  }, [authDetails?.data, loggedIn]);

  useEffect(() => {
    if (allCompanies.length > 0) {
      setOpenDialog(true);
    } else {
      setOpenDialog(false);
    }
  }, [allCompanies]);
  const onCompanyChange = (evt) => {
    const companyID = evt.target.value;
    switch (companyID) {
      case 0:
        navigation("/registration");
        break;
      default:
        const currentCompany = allCompanies.find(
          (company) => +company.id === +companyID
        );
        dispatch(requestCurrentCompany(currentCompany));
        loggedIn();
        navigation("/erp");
        break;
    }
  };
  const onSendEmailClick = () => {};
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        // background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
        padding: "20px",
      }}
    >
      <Card
        sx={(theme) => ({
          maxWidth: 500,
          margin: "auto",
          marginTop: theme.spacing(5),
          padding: theme.spacing(2),
          boxShadow: "5px 0 10px 5px rgba(0, 0, 0, 0.2)",
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
        })}
      >
        <CardHeader
          title={
            <CardMedia
              component="img"
              image={Logoimg}
              sx={{ width: "100%" }}
              alt="epackbook logo"
            />
          }
        />
        <CardContent>
          <Box sx={{ mb: 3, width: "100%" }}>
            <ToggleButtonGroup
              value={loginType}
              exclusive
              color="primary"
              onChange={onLoginTypeChange}
              fullWidth
            >
              <ToggleButton
                type="button"
                value={OBJ?.VENDOR}
                aria-label="vendor login"
              >
                <FaStore style={{ marginRight: 8 }} />
                {OBJ?.VENDOR}
              </ToggleButton>
              <ToggleButton
                type="button"
                value={OBJ?.EMPLOYEE}
                aria-label="employee login"
              >
                <FaUserShield style={{ marginRight: 8 }} />
                {OBJ?.EMPLOYEE}
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {loginType === OBJ?.VENDOR && (
            <Formik
              initialValues={initialValue}
              validationSchema={vendorAuthSchema}
              enableReinitialize={true}
              onSubmit={onSubmit}
            >
              {({ handleChange, handleBlur, errors, values }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <GenericInput
                        fullWidth
                        label={OBJ?.MOBILE_NUMBER_LABEL}
                        type="text"
                        name="mobile"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!errors.mobile}
                        helperText={errors.mobile}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <OTPComponent
                        otpDialogOpen={otpDialogOpen}
                        setOtpDialogOpen={setOtpDialogOpen}
                        OTP={OTP}
                        mobile={values.mobile}
                        roleID={roleDetails?.id}
                        onOTPChange={onOTPChange}
                        onVerifyOTPClick={onVerifyOTPClick}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CompanyDropdownComponent
                        open={openDialog}
                        onCompanyChange={onCompanyChange}
                        setOpen={setOpenDialog}
                        allCompanies={allCompanies}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <GenericLoadingButton
                        type="submit"
                        fullWidth
                        size="large"
                        sx={{ mt: 2 }}
                      >
                        Login as{" "}
                        {loginType.charAt(0).toUpperCase() + loginType.slice(1)}
                      </GenericLoadingButton>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          )}
          {loginType === OBJ?.EMPLOYEE && (
            <Formik
              initialValues={initialValue}
              validationSchema={employeeAuthSchema}
              enableReinitialize={true}
              onSubmit={onSubmit}
            >
              {({ handleChange, handleBlur, errors }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <GenericInput
                        label={OBJ?.EMAIL_ADDRESS_LABEL}
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!!errors?.email}
                        helperText={errors?.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <GenericInput
                        label={OBJ?.PASSWORD_LABEL}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!!errors?.password}
                        helperText={errors?.password}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <GenericLoadingButton
                        type="submit"
                        fullWidth
                        size="large"
                        sx={{ mt: 2 }}
                      >
                        Login as{" "}
                        {loginType.charAt(0).toUpperCase() + loginType.slice(1)}
                      </GenericLoadingButton>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          )}
          {OBJ?.VENDOR !== loginType && (
            <Grid container spacing={2}>
              <Grid item xs={12} textAlign="center">
                <Button
                  variant="text"
                  fullWidth
                  size="large"
                  type="button"
                  onClick={onForgotPasswordClick}
                  sx={{ cursor: "pointer", mt: 2 }}
                >
                  {OBJ?.FORGOT_PASSWORD}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <ForgotPasswordComponent
                  setIsForgotPasswordOpen={setIsForgotPasswordOpen}
                  isForgotPasswordOpen={isForgotPasswordOpen}
                  onSendEmailClick={onSendEmailClick}
                />
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
