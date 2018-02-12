import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
        {"id": 11, "name": "Иван", "surname": "Иванов", "exp": 10, "age": 40, "address": "ул. Ивановская д.10"},
        {"id": 12, "name": "Петр", "surname": "Петров", "exp": 2, "age": 20, "address": "ул. Петровсквя д.11"},
        {"id": 13, "name": "Павел", "surname": "Павлов", "exp": 15, "age": 70, "address": "ул. Павловская д.12"}
    ];
    return {employees};
  }
}