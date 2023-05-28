import { multiplicityCalculation } from "./function.mjs";
performance.mark("start");
process.env.UV_THREADPOOL_SIZE = 4;

// Генерируем массив
let ElementsAmount = 110000000;
// let ElementsAmount = 10 ; 
let array = [];
for (let i = 1; i<ElementsAmount+1; i++) {
    array.push(i);
}
// Генерируем массив

// Вычисляем в 1 потоке
let new_array = multiplicityCalculation(array);
// Вычисляем в 1 потоке
performance.mark("after multiplicity no threads");

let first_performance_result = performance.measure("measurement", "start", "after multiplicity no threads");

console.log(`Кол-во элементов %3= ${new_array.length}/${array.length} Время: ${(first_performance_result['duration']/1000).toFixed(4)} сек`);

import { Worker } from "node:worker_threads";

const ArrayAsyncCalc = (array) => {
return new Promise( (resolve, reject) => {
    const worker = new Worker("./worker.mjs" , {
        workerData: { array }
    });

    worker.on("message", (msg) => {
        resolve(msg);
    });

    worker.on("exit", () => {
        // console.log("Завершил работу");
    });
});
}

const MakeCalculations = async() => {
    performance.mark("async multiplicity start");
    let ExplodeArrayLength = array.length / 4;
    const result = await Promise.all([
        ArrayAsyncCalc(array.slice(0,ExplodeArrayLength)),
        ArrayAsyncCalc(array.slice(ExplodeArrayLength,ExplodeArrayLength*2)),
        ArrayAsyncCalc(array.slice(ExplodeArrayLength*2,ExplodeArrayLength*3)),
        ArrayAsyncCalc(array.slice(ExplodeArrayLength*3,ExplodeArrayLength*4)),
    ]);
    let AmountResult=0;
    result.forEach (element => {
        AmountResult =+ element;
    });
    performance.mark("async multiplicity end");
    let measurements = performance.measure("measurement", "async multiplicity start", "async multiplicity end");
    console.log(`WorkerThread: Кол-во элементов %3= ${new_array.length}/${array.length} Время: ${(measurements['duration']/1000).toFixed(4)} сек`);
}

MakeCalculations();