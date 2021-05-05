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

}

// export function totalCharacters(arr) {

// }

// export function hasChildrenEntries(arr, character) {

// } 

// export function sortByChildren(arr){
// } 