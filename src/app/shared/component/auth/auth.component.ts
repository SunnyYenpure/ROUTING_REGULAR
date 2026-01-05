import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  @ViewChild('loginform') loginform!: NgForm;
  @ViewChild('signupform') signupform!: NgForm;

  alreadyhaveacc: boolean = false;

  constructor(
    private _authservice: AuthService,
    private _router: Router,
    private _snackbarservice: SnackbarService
  ) {}

  ngOnInit(): void {}

  onlogin() {
    let obj = this.loginform.value;
    console.log(obj);
    this._authservice.login(obj).subscribe({
      next: (data) => {
        this._snackbarservice.opensnackbar(data.message);
        console.log(data);

        this._router.navigate(['home']);
      },
      error: (err) => {
        console.log(err);
        this._snackbarservice.opensnackbar(err.error.message);
        this.loginform.reset();
      },
    });
  }

  onsignup() {
    let obj = this.signupform.value;
    console.log(obj);
    this._authservice.signup(obj).subscribe({
      next: (data) => {
        this._authservice.settoken(data.token);
        this._snackbarservice.opensnackbar(data.message)
        this.alreadyhaveacc = false;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
