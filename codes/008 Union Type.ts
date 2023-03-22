/*
union by |
*/

let score: number | boolean;

score = 11
console.log(score);

score = true
console.log(score);

//console.log(score + 1);

if(typeof score === "number"){
    console.log(score + 1);
}else{
    console.log(!score);
}

let numsArr: number[] = [];
let charsArr: string[] = [];

let bothArr: (number | string)[] = [];

type seat = "upper" | "middle" | "lower";

let s1: seat = "middle";