import { getHouses, updateNumbers, totalCharacters, hasChildrenEntries, sortByChildren, num } from './more-object-keys-entries.js';

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
];

test('it gets the names of the houses', () => {
   //arrange
  const output = getHouses(characters); //act
  expect(output.sort()).toEqual(['Greyjoy', 'Snow', 'Arryn', 'Tyrell', 'Lannister', 'Targaryen', 'Stark'].sort()); //assert
});

test('updateNumbers', () => {
  const characters = { 'Grace Hopper': '222-303-5938', 'Ada Lovelace': '222-349-9842', 'Alan Turing': '222-853-5933' }
  ; //arrange
  const output = updateNumbers(characters); //act
  expect(output).toEqual(['Grace Hopper: 222-303-5938', 'Ada Lovelace: 222-349-9842', 'Alan Turing: 222-853-5933']); //assert
});

test('it gets the house size', () => {
  const output = totalCharacters(characters); //act
  expect(output).toEqual(26); //assert
});

test('it checks if the character has children', () => {

  const output1 = hasChildrenEntries(characters, 'Eddard'); //act
  const output2 = hasChildrenEntries(characters, 'Euron'); //act
  expect(output1).toEqual(true); //assert
  expect(output2).toEqual(false); //assert
});

test('it sorts through an array of objects. The houses are sorted by amount of children (and if needed also alphabetically). ((if two houses have the same amount of children or no children, the house name should sort alphabetically))', () => {
  const output = sortByChildren(characters); //act
  expect(output).toEqual([
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
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
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
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    }
  ]); //assert
});