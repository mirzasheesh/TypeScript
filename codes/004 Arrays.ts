/*
declaration of array in ts
let arrayName: type = value

default type 'never'
*/

let nums: number[] = [1, 2, 3];

let chars: Array<string> = [];

let charsReadOnly: ReadonlyArray<string> = [];

let obs: Array<{}> = [];

nums.push(4);

chars.push("A");
chars.push("B");
chars.push("C");

/*
nums.push("A");
*/

nums.map((num): number => {

    console.log(num);
    return num;
})