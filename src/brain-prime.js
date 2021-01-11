import readlineSync from 'readline-sync';
import { userName } from './cli.js';

const numbers = () => {
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const numberRundom1 = Math.floor(Math.random() * 100); // main
    const numberRundom2 = Math.floor(Math.random() * 100) + 1; // progress
    const numberRundom3 = Math.floor(Math.random() * 5) + 4; // length
    const numberRundom4 = Math.floor(Math.random() * numberRundom3); // ..
    const example = [numberRundom1];

    for (let i2 = 0; i2 <= numberRundom3; i2 += 1) {
      example.push(example[i2] + numberRundom2);
    }

    const realAnswer = example[numberRundom4];
    example[numberRundom4] = '..';
    const example2 = example.join(' ');
    console.log(`Question: ${example2}`);
    const userAnswer = Number(readlineSync.question('Answer: '));

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
