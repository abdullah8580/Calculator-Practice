"use strict";
function calc(a, b, operator) {
    if (operator == "+") {
        console.log(a + b);
    }
    if (operator == "-") {
        console.log(a - b);
    }
    if (operator == "/") {
        console.log(a / b);
    }
    if (operator == "%") {
        console.log(a % b);
    }
    if (operator == "x" || operator == "*") {
        console.log(a * b);
    }
}
calc(10, 20, "+");
calc(10, 20, "-");
calc(10, 20, "/");
calc(10, 20, "*");
calc(10, 20, "%");
