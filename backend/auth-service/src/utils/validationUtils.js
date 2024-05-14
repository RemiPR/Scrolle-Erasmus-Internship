import validator from "validator";

const isValidEmail = async function (email) {
  return validator.isEmail(email);
};
const isStrongPassword = async function (password) {
  // Check minimum length
  if (!validator.isLength(password, { min: 8 })) {
    return false;
  }
  // Regular expression to check for at least one uppercase letter, one number, and one special character
  const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
  // Test the password against the regular expression
  return pattern.test(password);
};

export const validationUtils = { isValidEmail, isStrongPassword };
