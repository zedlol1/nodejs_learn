const process = require('process');
const add = require('./add');
const multiply = require('./multiply');
const reduce = require('./reduce');
const divide = require('./divide');
const first = process.argv[2];
const second = process.argv[3];
const command = process.argv[4];

if (isNaN(+first)) {
    console.log("Аргумент 1 не равен числу.");
    return false;
}
if (isNaN(+second)) {
    console.log("Аргумент 2 не равен числу.");
    return false;
}

let result;
switch (command) {
    case "add":
        result = add.do(first,second);
    break;
    case "multiply":
        result = multiply.do(first,second);
    break;
    case "reduce":
        result = reduce.do(first,second);
    break;
    case "divide":
        result = divide.do(first,second);
    break;
    default:
    console.log("Введите 2 числа и команду add, multiply, reduce или divide для вычисления.");
    return false;
}

console.log(result);