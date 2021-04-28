export function evensOnly(arr) {
  return arr.filter(num => {
    return num % 2 === 0;
  });
}

export function fiveCharactersOrFewerOnly(arr){
  return arr.filter(words => {
    return words.length <= 5;
  });
}

export function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter(obj => {
    return obj.member === true;
  });
}

export function ofAge(arr){
  return arr.filter(obj => {
    return obj.age > 18;
  });
}

