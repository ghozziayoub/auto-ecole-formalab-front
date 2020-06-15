import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
