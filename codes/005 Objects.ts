type Person = {
    first: string,
    last: string,
}

let person1 : Person = {
    first: "Sheesh",
    last: "Mirza",
}

function createUser(firstName: string, lastName: string): { name: string } {

    return ({ name: `${firstName} ${lastName}`});
}

let user1 = createUser(person1.first, person1.last);

console.log("Hello", user1.name);