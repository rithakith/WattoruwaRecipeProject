import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any[] = []; // Store user data here

  constructor() { }

  addUser(userData: any) {
    this.users.push(userData); // Add user data to the array
    console.log('User added:', userData);
  }

  // Add more methods to manage user data if needed
}
