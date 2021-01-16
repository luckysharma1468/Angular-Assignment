import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  
  //If all the users are removed from the users array then there will be a error shown
  // but no user available template is showing perfectly fine
  
  users = [
    {
      name: "Prashant Sharma",
      email: "prashant.innovative01@gmail.com",
      username: "Lemon"
    },
    {
      name: "Rahul Banga",
      email: "rbanga@gmail.com",
      username: "RB"
    },
    {
      name: "Priyanuj Dutta",
      email: "duttaPriyanuj06@gmail.com",
      username: "Assami"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
