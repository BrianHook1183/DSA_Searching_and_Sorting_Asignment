/**
 * A sort algorithm that implements a stable sort
 * @param {function} compare The comparator function used in sorting
 * @param {array} elements The array to be sorted
 */
function sort(compare, elements) {
    if (Array.isArray(elements)) {
        if (elements.length <= 1) {
            return elements;
        }

        const middle = Math.floor(elements.length / 2);

        const leftElements = elements.slice(0, middle);
        const rightElements = elements.slice(middle);

        const leftElementsSorted = sort(compare, leftElements);
        const rightElementsSorted = sort(compare, rightElements);

        return merge(compare, leftElementsSorted, rightElementsSorted);
    }
    return elements;
}

function merge(compare, left, right) {
    const sorted = [];

    while (left.length && right.length) {
        const comparison = compare(left[0], right[0]);

        if (comparison <= 0) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    return sorted.concat(left, right);
}

module.exports = sort;
