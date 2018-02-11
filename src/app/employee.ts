export class Employee {
    id: number;
    name: string;
    surname: string;
    exp: number;
    age: number;
    address: string;
    constructor (id: number,
                name: string,
                surname: string,
                exp: number,
                age: number,
                address: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.exp = exp;
        this.age = age;
        this.address = address;
    }
}