import { getHouses, updateNumbers } from './more-object-keys-entries.js';


test('it gets the names of the houses', () => {
  const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ]; //arrange
  const output = getHouses(characters); //act
  expect(output.sort()).toEqual(['Greyjoy', 'Snow', 'Arryn', 'Tyrell', 'Lannister', 'Targaryen', 'Stark'].sort()); //assert
});



test('updateNumbers', () => {
  const characters = { 'Grace Hopper': '222-303-5938', 'Ada Lovelace': '222-349-9842', 'Alan Turing': '222-853-5933' }
  ; //arrange
  const output = updateNumbers(characters); //act
  expect(output).toEqual(['Grace Hopper: 222-303-5938', 'Ada Lovelace: 222-349-9842', 'Alan Turing: 222-853-5933']); //assert
});