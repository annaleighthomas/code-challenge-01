export function doubleNumbers(arr) {
  return arr.map(num => {
    return num * 2;
  }); 
}

export function stringItUp(arr){
  return arr.map(num => {
    return num.toString();

  });
}

export function capitalizeNames(arr){
  return arr.map(name => {
    let str = '' + name[0].toUpperCase() + name.slice(1).toLowerCase();
    return str;
  });
}

export function namesOnly(arr){
  return arr.map(n => n.name);
}

export function makeStrings(arr){
  return arr.map(obj => {
    if (obj.age > 18) {
      return obj.name + ' can go to The Matrix';
    } else {
      return obj.name + ' is under age!!';
    }
  });
}

export function readyToPutInTheDOM(arr){
  return arr.map(obj => {
    return `<h1>${obj.name}</h1>` + `<h2>${obj.age}</h2>`;
  });
  
}
