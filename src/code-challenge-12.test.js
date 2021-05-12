import { toLastNames, addValues } from './code-challenge-12.js';

test('to last names', () => {
  const input = [{ firstName: 'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond'}];
  const output = toLastNames(input);
  const expected = ['Jane Doe', 'James Bond'];
  expect(output).toEqual(expected);
});

test('given an array of numbers as input, uses reduce to add the values in the array', () => {
  const input = [1, 2, 3, 4];
  const output = addValues(input);
  const expected = 10;
  expect(output).toEqual(expected);
});