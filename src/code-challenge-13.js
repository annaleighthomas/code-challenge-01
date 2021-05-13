export function sortByChildren(array) {
  return array.sort((a, b) => {
    const childrenLength = a.children.length - b.children.length;
    if (childrenLength !== 0) return childrenLength;
    return (a.name < b.name);
  });
}

//i watched a long video on regex that didnt really explain anything useful

export function containsW(str) {
  if (/w/g.test(str)) {
    return true;
  }
  else {
    return false;
  }
};

export function isNum(input) {
  if (/[0-9]/g.test(input)) {
    return true;
  }
  else {
    return false;
  }
};