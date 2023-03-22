type User = {
    name: String,
}

/*
private
protected
public by default
*/

class UserService {

    readonly version: string = "1.0";

    private list: User[];

    private priv: number;

    constructor() {

        this.list = [];
    }

    addUser(user: User): void {

        this.list.push(user);
    }

    listUsers(): void {

        this.list.forEach((user: User) => {

            console.log(user.name);
        });
    }

    // setter
    set setPriv(num: number) {

        this.priv = num;
    }

    // getter
    get getPriv(): number {

        return this.priv;
    }
}

const users: UserService = new UserService();

users.addUser({
    name: "Sheesh"
});

users.addUser({
    name: "Mirza"
})

users.listUsers();