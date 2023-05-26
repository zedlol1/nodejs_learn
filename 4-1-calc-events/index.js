const EventEmitter = require("events");
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

const MyEmitter = new EventEmitter();

MyEmitter.on("add", (a,b) => {
    MyEmitter.emit("result", a+b);
});

MyEmitter.on("reduce", (a,b) => {
    MyEmitter.emit("result", a-b);
});

MyEmitter.on("multyply", (a,b) => {
    MyEmitter.emit("result", a*b);
});

MyEmitter.on("divide", (a,b) => {
    MyEmitter.emit("result", a/b);
});

MyEmitter.on("result", (result) => { console.log(result) });
MyEmitter.emit(command,1,2);