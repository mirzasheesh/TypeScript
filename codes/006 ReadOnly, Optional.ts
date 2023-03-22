/*
to define read only fields
? for optional
*/

type User = {
    readonly _id: number
    name: string
    age?: number
}

let user1: User = {
    _id: 1,
    name: "Sheesh Mirza"
}

/*
****** can't do this as this property is readonly
user1._id = 2;
*/

user1._id = 2;