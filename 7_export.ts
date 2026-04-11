export default interface User{
  id:string|number;
  name:string;
  email:string;
  role:Role;
}

export enum Role{
  Admin = 'Admin',
  User = 'User'
}