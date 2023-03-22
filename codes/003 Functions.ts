/*
function funcName(paramName: type): return_type {}
const funcName = (paramName: type): return_type => {}
*/

function sum(num1: number, num2: number = 1): number {

    return num1 + num2;
}

function printOut(val: string): void {

    console.log(val);
}

let num1: number = sum(0);
let num2: number = sum(1, 1);

console.log(num1, num2);

printOut("Hello");