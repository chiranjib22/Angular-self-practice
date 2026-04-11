import User, { Role } from './7_export';

const Person:User = {
  id:1,
  name:'Chiranjib',
  email:'jacksjitu73@gmail.com',
  role:Role.Admin
}

console.log(Person.name);
