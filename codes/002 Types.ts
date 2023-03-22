/*
to define a type or data type

type typeName = {
    varName: string;
}
*/

type Integer = number;

type Person = {
    firstName: string;
    lastName: string;
    age: Integer;
}

function createUser(person: Person) : void {

    console.log(`Hello ${person.firstName}`);
}

createUser({
    firstName: "Sheesh",
    lastName: "Mirza",
    age: 12,
});