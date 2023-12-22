import { Heap } from "./dataStruct/heap.js";

const h1 = new Heap();

const nums = [4, 5, 1, 3, 2];


nums.forEach(num => h1.push(num));
// console.log(h1.heap);
let i = 0;
let result = [];
while(i < nums.length) {
   result.push(h1.pop());
   i ++;
}
console.log(result)