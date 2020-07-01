import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  usersFromAPI = [];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsersFromAPI()
  }

  getAllUsersFromAPI() {
    this._userService.getAllUsers().subscribe(
      //first function
      res => this.usersFromAPI = res
      ,
      //second function
      err => console.log(err)
    )
  }

  title: String = 'DATA FROM Database';
  users: Array<String> = ['Yassine', 'Nabil', 'Ayoub', 'Yassine'];
  notification = true;

  JSONuser = {
    firstname: "ayoub",
    lastname: "ghozzi",
    phone: "58921953",
    address: {
      city: "Tunis",
      zip: 1001,
      street: "19 , Rue Yahia Turki , Lafayette"
    }
  }

  JSONusersArray = [
    {
      firstname: "ayoub",
      lastname: "ghozzi",
      phone: "58921953",
      address: {
        city: "Tunis",
        zip: 1001,
        street: "19 , Rue Yahia Turki , Lafayette"
      }
    },
    {
      firstname: "ayoub",
      lastname: "ghozzi",
      phone: "58921953",
      address: {
        city: "Tunis",
        zip: 1001,
        street: "19 , Rue Yahia Turki , Lafayette"
      }
    },
    {
      firstname: "ayoub",
      lastname: "ghozzi",
      phone: "58921953",
      address: {
        city: "Tunis",
        zip: 1001,
        street: "19 , Rue Yahia Turki , Lafayette"
      }
    }
  ]

  isError(): Boolean {
    return true;
  }

  deleteUser(user: String, index: number): void {
    console.log("Deleting user " + user + " index : " + index);
    //let index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }



}
