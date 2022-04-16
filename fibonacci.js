'use strict';

// output for fibonaaci numbers
// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987

var numbers = 10;
var previous_number = 0
fibonacci(numbers);

function fibonacci(numbers) {
    var current_number = 1;
    var sum = 0;
    console.log(previous_number);
    console.log(current_number);

    for (var i = 0; i < numbers; i++) {
        sum = current_number + previous_number;
        previous_number = current_number;
        current_number = sum;
        console.log(sum);
    }
    }