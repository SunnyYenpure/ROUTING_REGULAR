export interface Iregister {
  email: string;
  password: string;
  userRole: 'admin' | 'superAdmin' | 'buyer';
}

export interface Ilogin {
  email: string;
  password: string;
}
