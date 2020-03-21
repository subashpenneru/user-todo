import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../components/users.model';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let users: User[] =  [
      { 
        id: 1, 
        firstName: 'John', 
        lastName: 'Doe', 
        email: 'john.doe@gmail.com', 
        password: '123asd',
        age: 42
      }
    ];

    return { users };
  }
}
