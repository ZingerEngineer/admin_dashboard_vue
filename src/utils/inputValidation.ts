import { emailReg, passwordReg } from "../statics/regEx";
export const emailInputValidation = (email: string): boolean => {
  return emailReg.test(email);
};
export const passwordInputValidation = (password: string): boolean => {
  return passwordReg.test(password);
};
