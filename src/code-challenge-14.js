export const replaceZeroes = (string) => {
  const regex = /0/mg;
  const subst = `zero`;
  return string.replace(regex, subst);


};

export function validatePin(pin) {
  if (pin.match(/\d{4}$/gm)) {
    return true;
  } else {
    return false;
  }
};

export const validateWord = (word) => {
  if (word.match(/^[a-zA-Z]{5,10}$/)) {
    return true;
  } else {
    return false;
  }
};

// const hasNumber = (string) => {
//   //<solution>
// };

// const validateEmail = (email) => {
//   //<solution>
// };

// const validatePhoneNumber = (phoneNumber) => {
//   //<solution>
// };

// const findTagNames = elements => {
//   ///Solution 
// };