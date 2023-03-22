/*
type cannot contains method
interface can have
we can also extend it
*/

interface User {
    readonly name: string,
    age: number,
    phone?: number,
}

interface User {
    greet(): string
}

const user1: User = {
    name: "Sheesh",
    age: 20,
    greet() {
        return `Hello ${this.name}`;
    },
}

/* or extend as child*/

interface Admin extends User{
    role: string
}

/* or implement */

class SubUser implements User{
    name: string;
    age: number;
    phone?: number;
    greet(): string {
        throw new Error("Method not implemented.");
    }   
}

const greeting: string = user1.greet();

console.log(greeting);