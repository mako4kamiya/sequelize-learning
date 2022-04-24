const db = require('./models')
const User = db.User;

const jane = User.build({ firstName: "Jane", lastName: "Doe" });
console.log(jane instanceof User); // true
console.log(jane.firstName); // "Jane"
console.log(jane.lastName); // "Doe"
console.log(jane.email); // "undefined"