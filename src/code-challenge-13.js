export function sortByChildren(array) {
  return array.sort((a, b) => {
    const childrenLength = a.children.length - b.children.length;
    if (childrenLength !== 0) return childrenLength;
    return (a.name < b.name);
  });
}

export function containsW(str) {
  if (/w/g.test(str)) {
    return true;
  }
  else {
    return false;
  }
};
