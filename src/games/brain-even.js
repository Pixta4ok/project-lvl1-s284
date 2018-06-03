import askUser from '..';

const getRandomInt = () => Math.floor(Math.random() * (100 - 1)) + 1;
const isNumberEven = number => (number % 2) === 0;
const maxGameLoopCount = 3;
const gameLoop = (userName, gameCount) => {
  if (gameCount > maxGameLoopCount) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const question = getRandomInt();
  console.log(`Question: ${question}`);
  const rightAnswer = isNumberEven(question) ? 'yes' : 'no';
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
  const userName = askUser('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  const startGameIndex = 1;
  gameLoop(userName, startGameIndex);
};

