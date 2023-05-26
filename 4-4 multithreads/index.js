const crypto = require('crypto');
const start = performance.now();

let array = [];
for (let i = 1; i<300000 ;i++) {
    array.push(i);
}

console.log("Массив готов "+performance.now());