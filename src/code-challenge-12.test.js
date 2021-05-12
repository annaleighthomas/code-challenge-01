import { toLastNames } from './code-challenge-12.js';

test('to last names', () => {
  const input = [{ firstName: 'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond'}];
  const output = toLastNames(input);
  const expected = ['Jane Doe', 'James Bond'];
  expect(output).toEqual(expected);
});

