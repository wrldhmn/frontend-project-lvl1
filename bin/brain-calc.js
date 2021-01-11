import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

const numbers = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const numberRundom1 = Math.floor(Math.random() * 10);
    const numberRundom2 = Math.floor(Math.random() * 10);
    const numberRundom3 = Math.floor(Math.random() * 3);
    const operator = '+-*';
    const example = [];

    for (let i2 = 0; i2 < 3; i2 += 1) {
      if (i2 === 0) {
        example[i2] = numberRundom1;
      } else if (i2 === 1) {
        example[i2] = operator[numberRundom3];
      } else {
        example[i2] = numberRundom2;
      }
    }
    const example2 = example.join('');
    const realAnswer = Number(eval(example2));
    const userAnswer = Number(readlineSync.question(`${example2}=`));

    if (userAnswer === realAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}`);
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${realAnswer}.\nLet's try again, Sam!`);
      break;
    }
  }
};

export default numbers;
