
export function toLastNames(people) {
  // people.map(function(people) {
  //   return `${people.firstName} ${people.lastName}`;

  return people.map(person => {
    const fullName = `${person.firstName} ${person.lastName}`;
    return fullName;
  });

};

export function addValues(array) {
  return array.reduce((currentTotal, currentNum) => currentTotal + currentNum);
}

export function addPurchases(array) {
  return array.reduce((a, b) => a.purchasePrice + b.purchasePrice);
};

export function countNumberOfElements(array) {
  return array.reduce((total) => total + 1, 0);
};
