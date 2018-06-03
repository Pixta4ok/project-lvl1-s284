import askUser from '..';

const getRandomInt = () => Math.floor(Math.random() * (100 - 1)) + 1;
const isNumberEven = number => ((number % 2) === 0 ? 'yes' : 'no');
const gameLoopCount = 3;
const gameLoop = (userName, gameCount) => {
  if (gameCount > gameLoopCount) {
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

export default () => {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = askUser('May I have your name? ');
  console.log(`Hello ${name}!\n`);
  const startIndex = 1;
  gameLoop(name, startIndex);
};

