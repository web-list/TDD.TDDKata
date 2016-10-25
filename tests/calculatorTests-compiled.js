'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _calculator = require('../src/calculator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('When Add with String Calculator', function () {
    suite('when there is no delimeter', function () {
        test('for an empty string it will return 0', function () {
            var emptyString = '';

            var sum = (0, _calculator.add)(emptyString);

            _assert2.default.equal(0, sum);
        });

        test('for 1 as input string it will return 1', function () {
            var input = '1';

            var sum = (0, _calculator.add)(input);

            _assert2.default.equal(1, sum);
        });
    });

    suite('with Comma as delimeter', function () {
        test('for 1,2 as input string it will return sum of 1 and 2', function () {
            var input = "1,2";

            var sum = (0, _calculator.add)(input);

            _assert2.default.equal(1 + 2, sum);
        });

        test('for 3,5,54 as input string it will return sum of 3, 5 and 54', function () {
            var input = "3,5,54";

            var sum = (0, _calculator.add)(input);

            _assert2.default.equal(3 + 5 + 54, sum);
        });
    });

    suite('with NewLine and Comma delimeters', function () {
        test('for 154\n9,6 as input string it will return sum of 154, 9 and 6', function () {
            var input = '154\n9,6';

            var sum = (0, _calculator.add)(input);

            _assert2.default.equal(154 + 9 + 6, sum);
        });
    });
});

//# sourceMappingURL=calculatorTests-compiled.js.map