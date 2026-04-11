"use strict";
// without using enum
const user = {
    name: 'John',
    role: 'Admin'
};
if (user.role === 'Admin') {
    console.log('Admin User');
}
else {
    console.log('Normal User');
}
// using enum
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
})(Role || (Role = {}));
const user2 = {
    name: 'John',
    role: Role.Admin
};
if (user2.role === Role.Admin) {
    console.log('Admin User');
}
else {
    console.log('Normal User');
}
