function Logger(target: Function){
  console.log(`Logger Called for ${target.name}`);
}

@Logger
class Person{
  constructor(public name:string){
    console.log('Person constructor called');
  }
}

const person = new Person('John');