import { replaceZeroes, validatePin, validateWord, hasNumber, validateEmail, validatePhoneNumber } from './code-challenge-14';

describe('Challenge 1', () => {
  test('It should turn 0 to zero', () => {
    expect(replaceZeroes('hell0 w0rld')).toStrictEqual('hellzero wzerorld');
  });
});

describe('Challenge 2', () => {
  test('It should return true if pin is 4 digits', () => {
    expect(validatePin('1234')).toStrictEqual(true);
    expect(validatePin('123')).toStrictEqual(false);
  });
});

describe('Challenge 3', () => {
  test('It should return true if word is between 5-10 characters', () => {
    expect(validateWord('hello')).toStrictEqual(true);
    expect(validateWord('beautiful')).toStrictEqual(true);
    expect(validateWord('hell')).toStrictEqual(false);
  });
});


// describe('Challenge 4', () => {
//   test('It should return true if a letter is followed by a number', () => {
//     expect(hasNumber('h3ll0')).toStrictEqual(true);
//     expect(hasNumber('hello')).toStrictEqual(false);
    
//   });
// });

// describe('Challenge 5', () => {
//   test('It should return true if email format is followed', () => {
//     expect(validateEmail('booger@dani.com')).toStrictEqual(true);
//     expect(validateEmail('1234@1234.zinks:3000')).toStrictEqual(false);
//   });
// });

// describe('Challenge 6', () => {
//   test('It should return true if phone number format is valid', () => {
//     expect(validatePhoneNumber('(123)-123-1234')).toStrictEqual(true);
//     expect(validatePhoneNumber('123-123-1234')).toStrictEqual(true);
//     expect(validatePhoneNumber('5555555555')).toStrictEqual(true);
//     expect(validatePhoneNumber('555555-5555')).toStrictEqual(true);
//   });
// });