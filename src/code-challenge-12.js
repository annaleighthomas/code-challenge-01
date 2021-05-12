
export function toLastNames(people) {
  // people.map(function(people) {
  //   return `${people.firstName} ${people.lastName}`;

  return people.map(person => {
    const fullName = `${person.firstName} ${person.lastName}`;
    return fullName;
  });

};

export function addValues(array) {
  return array.reduce((a, b) => a + b);
}