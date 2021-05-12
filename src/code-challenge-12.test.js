import { toLastNames } from './code-challenge-12.js';

test('to last names', () => {
  expect(toLastNames([{ firstName:"Jane", lastName:"Doe" }, { firstName:"James", lastName:"Bond"}])).toEqual(["Jane Doe", "James Bond"]);
});

