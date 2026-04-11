// without using enum
const user = {
  name:'John',
  role:'Admin'
}

if(user.role === 'Admin'){
  console.log('Admin User');
}else{
  console.log('Normal User');
}
 
// using enum

enum Role {
  Admin = 'Admin',
  User = 'User'
}

const user2 = {
  name:'John',
  role:Role.Admin
}

if(user2.role === Role.Admin){
  console.log('Admin User');
}else{
  console.log('Normal User');
}