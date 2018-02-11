import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
        {"id": 11, "name": "Mr. Nice", "surname": "Mr. Nice", "exp": 2, "age": 20, "address": "123 asdsd 32"},
        {"id": 12, "name": "Narco", "surname": "Mr. Nice", "exp": 2, "age": 20, "address": "123 asdsd 32"},
        {"id": 13, "name": "Bombasto", "surname": "Mr. Nice", "exp": 2, "age": 20, "address": "123 asdsd 32"},
        {"id": 14, "name": "Celeritas", "surname": "Mr. Nice", "exp": 2, "age": 20, "address": "123 asdsd 32"},
        {"id": 15, "name": "Magneta", "surname": "Mr. Nice", "exp": 2, "age": 20, "address": "123 asdsd 32"},
        {"id": 16, "name": "RubberMan", "surname": "Mr. Nice", "exp": 2, "age": 20, "address": "123 asdsd 32"},
        {"id": 17, "name": "Dynama", "surname": "Mr. Nice", "exp": 2, "age": 20, "address": "123 asdsd 32"},
        {"id": 18, "name": "Dr IQ", "surname": "Mr. Nice", "exp": 2, "age": 20, "address": "123 asdsd 32"},
        {"id": 19, "name": "Magma", "surname": "Mr. Nice", "exp": 2, "age": 20, "address": "123 asdsd 32" }
    ];
    return {employees};
  }
}