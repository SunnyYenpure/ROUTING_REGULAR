// export interface Iusers {
//   userid: number;
//   username: string;
//   userrole:'Admin' |  'User' | 'Manager';
// }


export interface Iusers {
  userid: string;
  username: string;
  userrole: 'Admin' | 'User' | 'Manager' |'HR';
  email: string;
  mobile: string;
  isactive: boolean;
  createddate: string;
  imageurl:string
}
