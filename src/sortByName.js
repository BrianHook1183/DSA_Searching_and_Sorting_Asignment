const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */
function compare(left, right) {
    if (left < right) {
        return -1;
    }
    if (left > right) {
        return 1;
    }
    if (left === right) {
        return 0;
    }
}

function nameSort(customers) {

    let names = customers.map((customer) => customer.lastName + customer.firstName);

    let sorted = sort(compare, names);
    customers = [];

    sorted.forEach((name) => {
        let lastName = name.slice(0, 1);
        let firstName = name.slice(1, name.length);

        let newObj = { firstName, lastName };

        customers.push(newObj);
    })
    return customers;
}

module.exports = nameSort;