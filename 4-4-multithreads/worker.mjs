import {workerData , parentPort} from 'worker_threads';
import { multiplicityCalculation } from "./function.mjs";

// Вычисляем в 1 потоке
let new_array = multiplicityCalculation(workerData.array);
// Вычисляем в 1 потоке 

parentPort.postMessage(new_array.length); 