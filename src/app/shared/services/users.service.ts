import { Injectable } from '@angular/core';
import { Iusers } from '../models/users';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
 Userarr: Array<Iusers> = [
  {
    userid: '1',
    username: 'Balaji',
    userrole: 'Admin',
    email: 'Balaji@gmail.com',
    mobile: '9876543210',
    isactive: true,
    createddate: '2025-01-01',
    imageurl: 'https://i.pravatar.cc/150?img=12' 
  },
  {
  userid: '2',
  username: 'Rohan',
  userrole: 'User',
  email: 'rohan@gmail.com',
  mobile: '9123456789',
  isactive: true,
  createddate: '2025-01-05',
  imageurl: 'https://i.pravatar.cc/150?img=15' 
},

  {
    userid: '3',
    username: 'Irshad',
    userrole: 'Manager',
    email: 'irshad@gmail.com',
    mobile: '9988776655',
    isactive: false,
    createddate: '2025-01-10',
    imageurl: 'https://i.pravatar.cc/150?img=56' 
  },
  {
    userid: '4',
    username: 'Rohit',
    userrole: 'User',
    email: 'rohit@gmail.com',
    mobile: '9123456789',
    isactive: true,
    createddate: '2025-01-05',
    imageurl: 'https://i.pravatar.cc/150?img=14' 
  },
  {
    userid: '5',
    username: 'Sunny',
    userrole: 'User',
    email: 'Sunny@gmail.com',
    mobile: '9144456789',
    isactive: true,
    createddate: '2025-01-05',
    imageurl: 'https://i.pravatar.cc/150?img=56' 
  },
  {
    userid: '6',
    username: 'Amit',
    userrole: 'HR',
    email: 'amit@gmail.com',
    mobile: '9123456789',
    isactive: false,
    createddate: '2025-03-05',
    imageurl: 'https://i.pravatar.cc/150?img=65' 
  },
];


  constructor() {}

  fetchusers(): Observable<Iusers[]> {
    return of(this.Userarr);
  }

  //fetch single user

  fetchuser(id:string):Observable<Iusers>{
    let user=this.Userarr.find(f=>f.userid===id) as Iusers
    return of(user)

  }

  createUser(obj:Iusers):Observable<Iusers>{
    this.Userarr.unshift(obj)
    return of(obj)
  }

  updateUser(obj:Iusers):Observable<Iusers>{
    let getindex = this.Userarr.findIndex(u=>u.userid===obj.userid)
    this.Userarr[getindex] = obj
    return of(obj)
  }

  removeUser(id:string):Observable<string>{
     let getindex = this.Userarr.findIndex(u=>u.userid===id)
    this.Userarr.splice(getindex,1)
    return of(id)
  }

}
