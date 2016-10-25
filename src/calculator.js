var delimeter = /,|\n/;

function calculateSumWithDelimeters(input) {
    let numbers = input.split(delimeter);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }
    return sum;
}

function hasDelimeter(input) {
    let numbers = input.split(delimeter);
    return numbers.length > 1;
}

export function add(input) {
    if (input == '') return 0;

    if (!hasDelimeter(input)) return parseInt(input);

    return calculateSumWithDelimeters(input);
}
