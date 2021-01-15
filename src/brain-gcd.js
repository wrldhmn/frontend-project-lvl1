import readlineSync from 'readline-sync';
import { userName } from './cli.js';

const numbers = () => {
  for (let i = 0; i < 3; i += 1) {
    const numberRundom1 = Math.floor(Math.random() * 19) + 1;
    const numberRundom2 = Math.floor(Math.random() * 19) + 1;

    console.log(`Find the greatest common divisor of given numbers.\nQuestion: ${numberRundom1} ${numberRundom2}`);
    const userAnswer = Number(readlineSync.question('Answer: '));
    const minNumber = Math.min(numberRundom1, numberRundom2);
    let realAnswer;

    for (let i2 = minNumber; i2 > 0; i2 -= 1) {
      if (numberRundom1 % i2 === 0 && numberRundom2 % i2 === 0) {
        realAnswer = i2;
        break;
      }
    }

    if (userAnswer === realAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${realAnswer}.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default numbers;
