type Person = {
    firstName: string;
    lastName: string;
}

type Work = {
    employeeID : string;
    position: string;
}

type Employee = Person & Work & {};

let employee1: Employee = {
    firstName: "",
    lastName: "",
    employeeID: "",
    position: "",
}