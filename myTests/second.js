import assert from 'assert';

let separators = [',', "\n"];

function stringToArray(input) {
    for (let i in separators) {
        if (i > 0) input = input.replace(separators[i], separators[0]);
    }
    return input.split(separators[0]);
}

function sum(array) {
    let value = 0;
    for (let i in array) {
        let current = array[i];
        if (current === '') return null;
        value += parseInt(current);
    }
    return value;
}

function hasSeparatorString(input) {
    return input.substr(0, 2) == "//";
}

function getSeparators(input) {
    let strings = input.split("\n");
    return strings[0].substr(2);
}

function getNumbers(input) {
    let strings = input.split("\n");
    return strings[1];
}

function hasSeparator(input) {
    let result = false;

    for (let i in separators) {
        result = result || (input.indexOf(separators[i]) != -1);
    }
    return result;
}

function add(input) {

    if (input == '') return 0;

    if (hasSeparatorString(input)) {
        separators = [getSeparators(input)];
        input = getNumbers(input);
    }

    if (!hasSeparator(input)) return input;

    return sum(stringToArray(input));
}

suite("using add method", function () {

    suite("special cases", function () {
        test("when input is '' then result is 0", function () {
            let input = '';
            let result = add(input);
            assert.equal(result, 0);
        });

        test("when input is 4 then result is 4", function () {
            let input = '4';
            let result = add(input);
            assert.equal(result, 4);
        });

        suite("negative numbers", function () {
            test("when input is -7 then result is -7", function () {
                let input = '-7';
                let result = add(input);
                assert.equal(result, -7);
            });
        });

    });

    suite("with separators", function () {

        suite("has separator", function () {
            test("when input is 2,10 then result is 12", function () {
                let input = '2,10';
                let result = add(input);
                assert.equal(result, 2 + 10);
            });

            test("when input is 1,2,3 then result is 6", function () {
                let input = '1,2,3';
                let result = add(input);
                assert.equal(result, 1 + 2 + 3);
            });

            suite("negative numbers", function () {
                test("when input is 1,-2,3 then result is 2", function () {
                    let input = '1,-2,3';
                    let result = add(input);
                    assert.equal(result, 1 + (-2) + 3);
                });
            })

        });

        suite("different separators", function () {
            test("when input is 6,12\n44 then result is 62", function () {
                let input = '6,12\n44';
                let result = add(input);
                assert.equal(result, 6 + 12 + 44);
            });

        });

        suite("incorrect input", function () {
            test("when input is 1,\n then no result", function () {
                let input = '1,\n';
                let result = add(input);
                assert.equal(result, null);
            });
        });

        suite("any separators", function () {
            test("when input is //;\n2;4;8 then result is 14", function () {
                let input = '//;\n2;4;8';
                let result = add(input);
                assert.equal(result, 2 + 4 + 8);
            });
        });

    });

});