import assert from 'assert';

const separators = [",", "\n"];

function sum(arr) {
    var value = 0;
    for (var i in arr) {
        value += parseInt(arr[i]);
    }
    return value;
}

function containsSeparator(input) {
    var result = true;
    for (var i in separators) {
        result = result && (input.indexOf(separators[i]) == -1)
    }
    return result;
}

function strToArray(input) {
    for (var i in separators) {
        if (i > 0) {
            input = input.replace(separators[i], separators[0]);
        }
    }
    return input.split(separators[0]);
}

function calc(input) {
    if (input == '') return 0;
    if (containsSeparator(input)) return input;
    return sum(strToArray(input));
}

suite("calc working", function () {

    test("when input is '' then result is 0", function () {
        var input = '';
        var result = calc(input);
        assert.equal(result, 0);
    });

    test("when input is 4 then result is 4", function () {
        var input = "4";
        var result = calc(input);
        assert.equal(result, 4);
    });

    test("when input is 5,7 then result is 12", function () {
        var input = "5,7";
        var result = calc(input);
        assert.equal(result, 5 + 7);
    });

    test("when input is 10,20,43 then result is 73", function () {
        var input = "10,20,43";
        var result = calc(input);
        assert.equal(result, 10 + 20 + 43);
    });

    test("when input is 1\n2,3 then result is 6", function () {
        var input = "1\n2,3";
        var result = calc(input);
        assert.equal(result, 1 + 2 + 3);
    });

});