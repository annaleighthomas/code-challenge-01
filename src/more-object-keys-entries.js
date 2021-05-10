export function getHouses(characters) {
  const arr = [];
  for (let character of characters) {
    for (let key of Object.keys(character)) {
      if (key === 'house') {
        arr.push(character[key]);
      }
    }
  }
  return arr;
}


export function updateNumbers(obj) {
  const arr = [];
  Object.keys(obj).forEach(key => {
    arr.push(`${key}: ${obj[key]}`);
  });
  return arr;
}

export function totalCharacters(characters) {
  let count = 0;
  for (let character of characters) {
    for (let key of Object.keys(character)) {
      if (key === 'name') {
        count++;
      } if (key === 'spouse') {
        if (character[key] !== null)
          count ++;
      } if (key === 'children') {
        count = count + character[key].length;
      }
    }
  }
  return count;
}

export function hasChildrenEntries(arr, character) {
  let children = 0;
  Object.entries(arr).forEach(family => {
    family.forEach(person => {
      if (person.name === character) {
        children = person.children.length > 0 ? true : false;
      }
    });
  });
  return children;
}


export function sortByChildren(arr){
  return arr.sort((a, b) => {
    const childrenLength = a.children.length - b.children.length;
    if (childrenLength !== 0) return childrenLength;
    return (a.name < b.name);
  });
} 

