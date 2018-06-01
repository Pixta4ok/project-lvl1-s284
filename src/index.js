const readLineSync = require('readline-sync');

const askUser = question => readLineSync.question(question);
const greeting = name => console.log(`Hello, ${name}!\n`);
export { askUser, greeting };
