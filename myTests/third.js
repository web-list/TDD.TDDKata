import assert from 'assert';

let separators = [",", "\n"];

function processUserSeparators(input) {
    if (input.substr(0, 2) == "//") {
        let parts = input.split("\n");
        separators = [parts[0].substr(2)];
        input = parts[1];
    }

    return input;
}

function processSeparators(input) {
    for (let i in separators) {
        if (i > 0) input = input.replace(separators[i], separators[0]);
    }
    return input;
}

function processMoreThousand(number) {
    return (number > 1000) ? 0 : number;
}

function sum(input) {
    let array = input.split(separators[0]);
    let value = 0;
    for (let i in array) {
        let element = array[i];
        element = processMoreThousand(element);
        if (element === '') return null;
        value += parseInt(element);
    }

    return value;
}

function add(input) {
    if (input == '') return 0;
    input = processUserSeparators(input);
    input = processSeparators(input);
    return sum(input);
}

suite("testing method add", function () {

    suite("empty string", function () {
        test("when input is '' then result is 0", function () {
            let input = '';
            let result = add(input);
            assert.equal(result, 0);
        });
    });

    suite("one number", function () {

        suite("number is positive", function () {
            test("when input is 7 then result is 7", function () {
                let input = '7';
                let result = add(input);
                assert.equal(result, 7);
            });
        });

        suite("number is negative", function () {
            test("when input is -4 then result is -4", function () {
                let input = '-4';
                let result = add(input);
                assert.equal(result, -4);
            });
        });
    });

    suite("several numbers", function () {

        suite("common separators", function () {
            suite("separator is ,", function () {

                suite("numbers has negative number", function () {
                    test("when input is 1,-2,3 then result is 6", function () {
                        let input = '1,-2,3';
                        let result = add(input);
                        assert.equal(result, 1 + (-2) + 3);
                    });
                });

                test("when input is 1,2,3 then result is 6", function () {
                    let input = '1,2,3';
                    let result = add(input);
                    assert.equal(result, 1 + 2 + 3);
                });
            });


            suite("different separators", function () {
                test("when input is 4,5\n6 then result is 15", function () {
                    let input = "4,5\n6";
                    let result = add(input);
                    assert.equal(result, 4 + 5 + 6);
                });
            });

            suite("mistake in input", function () {
                test("when input is 1\n2, then result is null", function () {
                    let input = "1\n2,";
                    let result = add(input);
                    assert.equal(result, null);
                });
            });
        });

        suite("user separators", function () {
            test("when input is //;\n5;6 then result is 11", function () {
                let input = "//;\n5;6";
                let result = add(input);
                assert.equal(result, 5 + 6);
            });
        });

        suite("ignoring number more 1000", function () {
            test("when input is 2,1001 then result 2", function () {
                let input = "2,1001";
                let result = add(input);
                assert.equal(result, 2);
            });
        });

        suite("any separators length", function () {
            test("when input is //***\n1***2***3 then result is 6", function () {
                let input = "//***\n1***2***3";
                let result = add(input);
                assert.equal(result, 1 + 2 + 3);
            });
        });


    });

});