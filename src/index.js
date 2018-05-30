const readLineSync = require('readline-sync');
const getUserName = () => readLineSync.question('May I have your name? ');
const greeting = (name) => console.log(`Hello, ${name}!`); 
export { getUserName, greeting };
