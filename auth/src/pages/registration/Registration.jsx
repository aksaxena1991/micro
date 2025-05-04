import { Grid, Paper, Typography } from "@mui/material";
import dayjs from "dayjs";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoImage from "../../../Assets/Logos/epackbookLogoBlue.svg";
import GenericDatePicker from "../../../common-components/form-elements/genericDatePicker";
import GenericDropdown from "../../../common-components/form-elements/genericDropdown";
import GenericInput from "../../../common-components/form-elements/genericInput";
import GenericLoadingButton from "../../../common-components/form-elements/genericLoadingButton";
import GenericRadio from "../../../common-components/form-elements/genericRadio";
import SubHeader from "../../../common-components/page-elements/SubHeader";
import {
    companyInitial,
    companySchema,
} from "../../../common-components/validator/company-validation";
import OBJ from "../../../languages/fr.json";
import { getAuthState, getCompanyState } from "../../../store/selectors";
import {
    requestRegisterCompany,
    resetCompany,
} from "../../../store/slices/CompanySlice";
const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(getAuthState);
  const company = useSelector(getCompanyState);
  const { registerCompany } = company;
  const { login } = auth;
  const onSubmit = (values,{ resetForm }) => {
    dispatch(resetCompany());
    dispatch(requestRegisterCompany({ ...values, authID: login?.data?.id }));
  };
  useEffect(() => {
    if (registerCompany?.response) {
      navigate(`/erp`);
    } else {
      navigate("/registration");
    }
  }, [navigate, registerCompany?.response]);

  return (
    <Fragment>
      <SubHeader title={OBJ.COMPANY_REGISTRATION_FORM_LABEL} />
      <Paper sx={{ height: "100%", p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              srcSet={`${LogoImage}?w=120&h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${LogoImage}?w=120&h=120&fit=crop&auto=format`}
              alt={"logo"}
              width={220}
              loading="lazy"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Formik
                  initialValues={companyInitial}
                  validationSchema={companySchema}
                  onSubmit={onSubmit}
                >
                  {({ handleBlur, handleChange, errors, values }) => (
                    <Form>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ my: 2 }}>
                          <Typography variant="h6" fontWeight={600}>
                            {OBJ.COMPANY_DETAILS_LABEL}
                          </Typography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <GenericInput
                            label={OBJ.COMPANY_NAME_LABEL}
                            name="companyName"
                            id="companyName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name={"companyName"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <GenericInput
                            label={OBJ.CONTACT_PERSON_LABEL}
                            name="contactPerson"
                            id="contactPerson"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name={"contactPerson"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <GenericInput
                            label={OBJ.COMPANY_EMAIL_LABEL}
                            name="email"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name={"email"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <GenericInput
                            label={OBJ.COMPANY_MOBILE_LABEL}
                            name="companyMobile"
                            id="companyMobile"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name={"companyMobile"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <GenericInput
                            label={OBJ.COMPANY_WEBSITE_LABEL}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="companyWebsite"
                            id="companyWebsite"
                          />
                          <ErrorMessage
                            name={"companyWebsite"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <GenericDropdown
                            label={OBJ.COMPANY_TYPE_LABEL}
                            data={OBJ.COMPANY_TYPE_LIST}
                            selected={OBJ.COMPANY_TYPE_LIST[0].value}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="companyType"
                            id="companyType"
                          />
                          <ErrorMessage
                            name={"companyType"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>
                        <Grid item xs={8} md={8}>
                          <GenericInput
                            label={OBJ.ADDRESS_LABEL}
                            name="address"
                            id="address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            multiline
                            rows={1}
                          />
                          <ErrorMessage
                            name={"address"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <GenericInput
                            label={OBJ.LOCALITY_LABEL}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="locality"
                            id="locality"
                          />
                          <ErrorMessage
                            name={"locality"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <GenericInput
                            label={OBJ.LANDMARK_LABEL}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="landmark"
                            id="landmark"
                          />
                          <ErrorMessage
                            name={"landmark"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <GenericInput
                            label={OBJ.DISTRICT_LABEL}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="district"
                            id="district"
                          />
                          <ErrorMessage
                            name={"district"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <GenericInput
                            label={OBJ.POSI_OFFICE_LABEL}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="postOffice"
                            id="postOffice"
                          />
                          <ErrorMessage
                            name={"postOffice"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <GenericInput
                            label={OBJ.CITY_LABEL}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="city"
                            id="city"
                          />
                          <ErrorMessage
                            name={"city"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>

                        <Grid item xs={4} md={4}>
                          <GenericInput
                            label={OBJ.STATE_LABEL}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="state"
                            id="state"
                          />
                          <ErrorMessage
                            name={"state"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <GenericInput
                            label={OBJ.PINCODE_LABEL}
                            name="pincode"
                            id="pincode"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage
                            name={"pincode"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>

                        <Grid item xs={8} md={12}>
                          <Grid container spacing={1}>
                            {values.companyType ===
                              OBJ.COMPANY_TYPE_LIST[3].value && (
                              <Grid item xs={12} md={4}>
                                <GenericInput
                                  label={OBJ.CIN_NO_LABEL}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="cinNo"
                                  id="cinNo"
                                />
                                <ErrorMessage
                                  name={"cinNo"}
                                  component="p"
                                  className="error"
                                ></ErrorMessage>
                              </Grid>
                            )}
                            {values.companyType ===
                              OBJ.COMPANY_TYPE_LIST[2].value && (
                              <Grid item xs={12} md={4}>
                                <GenericInput
                                  label={OBJ.INC_NO_LABEL}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="incNo"
                                  id="incNo"
                                />
                                <ErrorMessage
                                  name={"incNo"}
                                  component="p"
                                  className="error"
                                ></ErrorMessage>
                              </Grid>
                            )}
                            {values.companyType ===
                              OBJ.COMPANY_TYPE_LIST[0].value && (
                              <Grid item xs={12} md={4}>
                                <GenericInput
                                  label={OBJ.INDIVIDUAL_PAN_NO_LABEL}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="panNo"
                                  id="panNo"
                                />
                                <ErrorMessage
                                  name={"panNo"}
                                  component="p"
                                  className="error"
                                ></ErrorMessage>
                              </Grid>
                            )}
                            {values.companyType ===
                              OBJ.COMPANY_TYPE_LIST[1].value && (
                              <Grid item xs={12} md={4}>
                                <GenericInput
                                  label={OBJ.FIRM_PAN_NO_LABEL}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  name="firmPanNo"
                                  id="firmPanNo"
                                />
                                <ErrorMessage
                                  name={"firmPanNo"}
                                  component="p"
                                  className="error"
                                ></ErrorMessage>
                              </Grid>
                            )}
                            <Grid item xs={12} md={4}>
                              <GenericInput
                                label={OBJ.GST_NO_LABEL}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="gstNo"
                                id="gstNo"
                              />
                              <ErrorMessage
                                name={"gstNo"}
                                component="p"
                                className="error"
                              ></ErrorMessage>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item md={12} xs={12}>
                          <Typography
                            variant={"h6"}
                            fontWeight={600}
                            sx={{ my: 1 }}
                          >
                            {OBJ.IBA_APPROVAL_LABEL}
                          </Typography>

                          <GenericRadio
                            orientation="row"
                            name="ibaApproval"
                            id="ibaApproval"
                            options={OBJ.IBA_APPROVAL_LIST}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          <ErrorMessage
                            name={"ibaApproval"}
                            component="p"
                            className="error"
                          ></ErrorMessage>
                        </Grid>

                        {values.ibaApproval ===
                          OBJ.IBA_APPROVAL_LIST[1].value && (
                          <Fragment>
                            <Grid item xs={12} md={6}>
                              <GenericInput
                                label={OBJ.IBA_APPROVAL_CODE_LABEL}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="ibaApprovalCode"
                                id="ibaApprovalCode"
                              />
                              <ErrorMessage
                                name={"ibaApprovalCode"}
                                component="p"
                                className="error"
                              ></ErrorMessage>
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <Field
                                name="ibaCodeValidTill"
                                component={GenericDatePicker}
                                views={["year", "month", "day"]}
                                id="ibaCodeValidTill"
                                label={OBJ.IBA_APPROVAL_CODE_VALIDITY_LABEL}
                                closeOnSelect={true}
                                disablePast={true}
                                defaultValue={dayjs(new Date())}
                              />
                              <ErrorMessage
                                name={"ibaCodeValidTill"}
                                component="p"
                                className="error"
                              ></ErrorMessage>
                            </Grid>
                          </Fragment>
                        )}
                        <Grid item md={12} xs={12}>
                          <GenericLoadingButton
                            sx={{ my: 2, float: "right" }}
                            type="submit"
                          >
                            {OBJ.REGISTRATION_COMPLETE_LABEL}
                          </GenericLoadingButton>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};
export default Registration;
