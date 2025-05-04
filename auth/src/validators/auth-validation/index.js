import * as Yup from "yup";
import {
  EMAIL_REGEX,
  MOBILE_REGEX,
  PASSWORD_REGEX
} from "../../../utils/regular-expressions";
export const authInitial = {
  email: "",
  password: "",
  mobile: "",

};
export const vendorAuthSchema = Yup.object().shape({
  mobile: Yup.string("Please Enter Your Mobile Number!").required("Mobile Is Required!").matches(MOBILE_REGEX, "Please Enter Valid Mobile Number!"),
})
export const employeeAuthSchema = Yup.object().shape({
  email: Yup.string("Please Enter Your Email ID!").required("Email Is Required!").matches(EMAIL_REGEX, "Please Enter Valid Email ID!"),
  password: Yup.string("Please Enter Your Password!").when(
    ["email"],
    {
      is: (email) => {
        return (
          (email !== "")
        );
      },
      then: (schema) =>
        schema
          .required("Password Is Required!")
          .matches(
            PASSWORD_REGEX,
            "Password Should Contain At least 1 character and 1 Special Character!",
          ),
      otherwise: null,
    },
  ),
})


