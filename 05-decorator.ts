// class decorator

function logger(constructor: Function) {
  console.log("Class created: ", constructor.name);
}

@logger
class User {
  name = "Messi";
}

let user = new User();

// method decorator

function Log(value: Function, context: ClassMethodDecoratorContext) {
  console.log("Method: ", context.name);
}

class Bank {
  @Log
  save() {
    console.log("saving...");
  }
}

// Property decorator

function Plog(value: any, context: ClassFieldDecoratorContext) {
  console.log("Method: ", context.name);
}

class Football {
  @Plog
  owner = "Messi";
}
