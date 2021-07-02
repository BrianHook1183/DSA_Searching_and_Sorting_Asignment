/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */

function compare(element, target) {
  if (element < target) {
    return 1;
  }
  if (element > target) {
    return -1;
  }
  if (element === target) {
    return 0;
  }
}

function searchByName(firstName, lastName, customers) {
  if (Array.isArray(customers)) {
    let lowerIndex = 0;
    let upperIndex = customers.length - 1;
    while (lowerIndex <= upperIndex) {
      const index = Math.floor((upperIndex + lowerIndex) / 2);
      const comparisonLastName = compare(customers[index].lastName, lastName);
      const comparisonFirstName = compare(customers[index].firstName, firstName);

      // move index until last name matches
      if (comparisonLastName > 0) {
        lowerIndex = index + 1;
      }
      if (comparisonLastName < 0) {
        upperIndex = index - 1;
      }
      if (comparisonLastName === 0) {
        // Only checks first name once last name finds a match
        if (comparisonFirstName > 0) {
          lowerIndex = index + 1;
        }
        if (comparisonFirstName < 0) {
          upperIndex = index - 1;
        }
        // when first and last name both match, index is returned
        if (comparisonFirstName === 0) {
          return index;
        }
      }
    }
    return -1;
  }
  return -1;
}

module.exports = searchByName;
