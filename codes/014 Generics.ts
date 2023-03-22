const list: Array<number> = [];
const names: Array<string> = [];

list.push(1);
list.push(2);
list.push(3);

names.push("a");
names.push("b");
names.push("c");

function Sum<Type>(num1: Type, num2: Type): {} {

    return ({ num1, num2 });
}

console.log(Sum<Number>(1, 2));