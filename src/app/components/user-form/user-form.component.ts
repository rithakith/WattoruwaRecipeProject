import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'; // Import your user service

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name: string = '';
  age: number | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  submitForm() {
    // Create an object with form data
    const userData = {
      name: this.name,
      age: this.age
    };

    // Call a service method to store the user data
    this.userService.addUser(userData);

    // Clear the form fields after submission
    this.name = '';
    this.age = null;
  }
}
