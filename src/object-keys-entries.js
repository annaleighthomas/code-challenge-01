export function sortedKeys(obj) {
  return Object.keys(obj).sort((a, b) => {
    return a.length - b.length;
  });
}

export function getFilteredKey(obj) {
  for (let key of Object.keys(obj)) {
    if (key === 'age') {
      return [key];
    }
  }
}

export function getArrayOfKeysAndValues(obj){
  const arr = [];
  for (let [key, value] of Object.entries(obj)) {
    arr.push([key, value]);
  }
  return arr;
}

// export function getArrayOfKeysAndValues(obj){
//   const arr = [];
//   for (let key of Object.keys(obj)) {
//     arr.push([key, obj[key]]);
//   }
//   return arr;
// }

export function sortedArraysByValuesLength(obj) {
  const arr = [];
  for (let [key, value] of Object.entries(obj)) {
    arr.push([key, value]);
  } 
  return arr.sort((a, b) => {
    return b[1].length - a[1].length;
  });
}