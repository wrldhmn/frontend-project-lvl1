import readlineSync from 'readline-sync';
import { userName } from './cli.js';

const numbers = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const numberRundom1 = Math.floor(Math.random() * 100) + 2;
    let realAnswer;

    for (let i2 = numberRundom1 - 1; i2 >= 1; i2 -= 1) {
      if (numberRundom1 % i2 === 0) {
        realAnswer = i2;
        break;
      }
    }

    console.log(`Question: ${numberRundom1}`);
    const userAnswer = (readlineSync.question('Answer: '));

    if (userAnswer === 'yes' && realAnswer === 1) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (userAnswer === 'no' && realAnswer !== 1) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (userAnswer === 'yes' && realAnswer !== 1) {
      console.log(`yes is wrong answer ;(. Correct answer was no.\nLet's try again, ${userName}!`);
      break;
    } else if (userAnswer === 'no' && realAnswer === 1) {
      console.log(`no is wrong answer ;(. Correct answer was yes.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default numbers;
