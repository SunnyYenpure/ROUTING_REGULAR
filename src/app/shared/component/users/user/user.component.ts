import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Iusers } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/services/users.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { config } from 'rxjs';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userid!: string;
  userinfo!: Iusers;
  constructor(
    private _route: ActivatedRoute,
    private _userserive: UsersService,
    private Router : Router,
    private _matDialog : MatDialog,
    private _snackbar : SnackbarService
  ) {}

  ngOnInit(): void {

    this.AllFetchUers()
  }

  AllFetchUers(){
    this.userid = this._route.snapshot.params['userid'];
    console.log(this._route.snapshot.params['userid']);
    
    //api call
    if (this.userid) {
      this._userserive.fetchuser(this.userid).subscribe({
        next: (data) => {
          console.log(data);
          this.userinfo = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
 
  onRemove(userid:string){
    let Configobj= new MatDialogConfig()
    Configobj.width = "350px";
    Configobj.disableClose = true ;
    Configobj.data = `are you sure, you want to remove this user`

 let matDialogRef = this._matDialog.open(GetConfirmComponent,Configobj)
        matDialogRef.afterClosed()
        .subscribe({
          next : res=>{
            if(res){
              this._userserive.removeUser(userid)
              .subscribe({
                next : res=>{
                  this._snackbar.opensnackbar(`user with id ${res} removed successfully`)
                  this.Router.navigate(["/users"])
                }
              })
            }
          }
        })
  }

}
