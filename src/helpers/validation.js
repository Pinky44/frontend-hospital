import { regular } from "src/constants";

const checkLengthString = (string, number) => {
  return string.trim().length >= number;
};

const checkRegularExpressionInString = (string) => {
  const regExpValidation = new RegExp(
    regular,
    "i"
  );

  return regExpValidation.test(string);
};

const checkSimilarityString = (string, repeatedPassword) => {
  return string === repeatedPassword;
};

const checkEmptinessString = (string) => {
  return string.trim() !== "";
};

export {
  checkLengthString,
  checkRegularExpressionInString,
  checkSimilarityString,
  checkEmptinessString,
};