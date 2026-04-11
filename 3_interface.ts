interface User{
  name:string;
  age?:number;  // here age is optional
}

let user:User = {
  name:'John',
  age:10
};

let user2:User = {
  name:'Chandler'
}

console.log(user.name);
console.log(user2.name);
console.log(user.age);
console.log(user2.age);
