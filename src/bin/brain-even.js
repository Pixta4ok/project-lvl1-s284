#!/usr/bin/env node
import { askUser, greeting } from '..';

const sayWelcome = () => console.log('Welcome to Brain Games!');
const tellGameRules = () => console.log('Answer "yes" if number even otherwise answer "no".\n');
const getRandomInt = () => Math.floor(Math.random() * (100 - 1)) + 1;
const isNumberEven = () => {
  const number = getRandomInt();
  console.log(`Question: ${number}`);
  return number % 2 === 0 ? 'yes' : 'no';
};
const getUserAnswer = () => askUser('Your answer: ');
const gameLoop = (userName, gameCount) => {
  if (gameCount > 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const rightAnswer = isNumberEven();
  const answer = getUserAnswer();
  const answerIsCorrect = rightAnswer === answer;
  console.log(answerIsCorrect ? 'Correct!' : `"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
  if (answerIsCorrect) gameLoop(userName, gameCount + 1);
};

sayWelcome();
tellGameRules();
const name = askUser('May I have your name? ');
greeting(name);
gameLoop(name, 1);
