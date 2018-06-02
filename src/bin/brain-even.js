#!/usr/bin/env node
import askUser from '..';

const getRandomInt = () => Math.floor(Math.random() * (100 - 1)) + 1;
const isNumberEven = number => ((number % 2) === 0 ? 'yes' : 'no');
const gameLoop = (userName, gameCount) => {
  if (gameCount > 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const randomNumber = getRandomInt();
  console.log(`Question: ${randomNumber}`);
  const rightAnswer = isNumberEven(randomNumber);
  const userAnswer = askUser('Your answer: ');
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
    gameLoop(userName, gameCount + 1);
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". Let's try again, ${userName}!`);
  }
};

console.log('Welcome to Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');
const name = askUser('May I have your name? ');
console.log(`Hello ${name}!\n`);
gameLoop(name, 1);
