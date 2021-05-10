export function howMuchPencil(string) {
  const array = [];
  // array.push(string);
  // while (string !== '') {
  //   string = string.slice(1);
  //   array.push(string);
  // }
  for (let i = 0; i < string.length; i++) {
    array.push(string.slice(i));
  }
  array.push('');
  return array;
}

export function wordsToCharList(string) {
  const array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string.charAt(i));
  } 
  return array; 
}

export function listFoods(recipe){
  const array = [];
  for (let key of Object.keys(recipe)){
    if (key === 'ingredients') {
      for (let str of recipe[key]) {
        const splitString = str.split(' ');
        const spliceString = splitString.splice(2);
        const joinString = spliceString.join(' ');
        array.push(joinString);
      }
    }
  }
  return array;
}

export function stepActions(recipe){
  const array = [];
  for (let key of Object.keys(recipe)) {
    if (key === 'steps') {
      for (let str of recipe[key]) {
        const splitString = str.split(' ');
        const spliceString = splitString.splice(0, 1);
        const joinString = spliceString.join(' ');
        array.push(joinString);
      }
    }
  }
  return array;
}

export function removeLastCharacters(str, numberOfCharacters){
  if (numberOfCharacters >= str.length){
    return '';
  } 
  if (numberOfCharacters < 0) {
    return str;
  }
  const string = str.slice(0, str.length - numberOfCharacters);
  return string;
}

// export function totalSumCSV(str){
  
// }

// export function removeVowels(str){
  
// }

// export function removeVowels(str){
  
// }

// export function extractVowels(str){
  
// }