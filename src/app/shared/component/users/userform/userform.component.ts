
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
isineditmode:boolean=false
editid !: string
@ViewChild("userform") userform !: NgForm
  private _userSerivce = inject(UsersService)
  constructor(
    private _uuidSerivce : UuidService,
    private _router : Router,
    private _ActiveRoute : ActivatedRoute,
    private _sncabar : SnackbarService
  ) { }

  ngOnInit(): void {

    this.patchdata()
  }

  patchdata(){
    setTimeout(() => {
      
       let id = this._ActiveRoute.snapshot.params['userid']
     this._userSerivce.fetchuser(id)
     .subscribe({
      next  :res=>{
        if(res){
          this.editid = res.userid
          this.isineditmode = true
          this.userform.form.patchValue(res)
        }
      }
     })
    }, 0);
  }


onSubmit(){
  let obj = {...this.userform.value,userid:this._uuidSerivce.uuid()}
  this._userSerivce.createUser(obj)
  .subscribe({
    next : res=>{
      this._router.navigate(["/users"])
      this._sncabar.opensnackbar("user is Added successfully")
    },
    error : err=>console.log(err),
  })
}

    onUpdate(){
      let update_obj = {...this.userform.value,userid:this.editid}
        this._userSerivce.updateUser(update_obj)
        .subscribe({
          next : data=>{
      this._sncabar.opensnackbar("user is updated successfully")
            this._router.navigate(["/users"])
          }
        })
    }

}
