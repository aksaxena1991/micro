export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const MOBILE_REGEX = /^[6-9]\d{9}$/;
export const OTP_REGEX = /^\d{6}$/;
export const START_WITH_ALPHABET_END_WITH_NUMBER_REGEX = /^[A-Za-z]+[0-9]+$/;
export const NAME_WITH_CHARACTERS_REGEX = /^[A-Za-z0-9\s]+$/;
export const OWNER_REGEX = /^[A-Za-z&\s.]+$/;
export const COMPANY_NAME_REGEX = /^[A-Za-z0-9&\s.]+$/;
export const ADDRESS_REGEX = /^[a-zA-Z0-9\s.,/\\-]+$/;
export const PINCODE_REGEX = /^[1-9][0-9]{5}$/;
export const AMOUNTS_REGEX = /^\d+$/;
export const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
export const IFSC_REGEX = /^[A-Z]{4}0[A-Z0-9]{6}$/;
export const UPIID_REGEX = /[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/;
export const ACCOUNT_NUMBER_REGEX = /^[0-9]+$/;
export const NUMBER_REGEX = /^[0-9]{1,99999}$/;
export const GST_REGEX =
  /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
export const CIN_NO_REGEX = /^[LU][0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/;
export const INC_NO_REGEX = /^[A-Z]{3}[0-9]{6}$/;
export const COMPANY_WEBSITE_REGEX =
  /^(https?:\/\/)?(www\.)?([A-Za-z0-9.-]+\.[A-Za-z]{2,})(\/[A-Za-z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/;
export const ALPHA_NUMERIC_REGEX = /^[A-Za-z0-9\s]*$/;
export const NUMERIC_DECIMAL_REGEX = /^\d+(\.\d+)?$/;
export const DRIVER_LICENSE_REGEX = /^([A-Za-z]{2})(\d{2}|\d{3})[a-zA-Z]{0,1}(\d{4})(\d{7})$/;
export const FLOORS_REGEX = /^[0-9a-zA-Z- ]+$/;
export const INSURANCE_PERCENTAGE_REGEX = /^[0-9]+(\.[0-9]+)?$/;
export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/;
export const AADHAR_CARD_REGEX = /^[2-9]{1}[0-9]{11}$/;
export const POLLUTION_CERTIFICATE_REGEX = /^[A-Za-z]{2,3}-?\d{6,7}$/;
export const RC_REGEX = /^[A-Za-z]{1,3}-?\d{1,4}[A-Za-z]{0,3}-?\d{0,4}$/;

