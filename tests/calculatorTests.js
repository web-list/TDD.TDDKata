import assert from 'assert'
import {add} from '../src/calculator'

suite('When Add with String Calculator', function () {
    suite('when there is no delimeter', function() {
        test('for an empty string it will return 0', function() {
            let emptyString = '';

            let sum = add(emptyString);

            assert.equal(0, sum);
        });

        test('for 1 as input string it will return 1', function() {
            let input = '1';

            let sum = add(input);

            assert.equal(1, sum);
        });
    });

    suite('with Comma as delimeter', function() {
        test('for 1,2 as input string it will return sum of 1 and 2', function() {
            let input = "1,2";

            let sum = add(input);

            assert.equal(1+2, sum);
        });

        test('for 3,5,54 as input string it will return sum of 3, 5 and 54', function() {
            let input = "3,5,54";

            let sum = add(input);

            assert.equal(3 + 5 + 54, sum);
        });
    });

    suite('with NewLine and Comma delimeters', function() {
        test('for 154\n9,6 as input string it will return sum of 154, 9 and 6', function() {
            let input = '154\n9,6';
            
            let sum = add(input);

            assert.equal(154 + 9 + 6, sum);
        })
    })
});