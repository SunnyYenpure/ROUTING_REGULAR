import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iusers } from '../../models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userarray: Array<Iusers> = [];
  constructor(private _userservice: UsersService) {}

  ngOnInit(): void {
    this.getusers();
  }

  getusers() {
    this._userservice.fetchusers().subscribe({
      next: (data) => {
        console.log(data);
        this.userarray = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
