#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings, userName } from '../src/cli.js';

const numbers = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numberRundom = Math.floor(Math.random() * 100);
    console.log(`Question: ${numberRundom}`);
    const answer = readlineSync.question('Answer: ');

    if (numberRundom % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (numberRundom % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else if (numberRundom % 2 === 0 && answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.'\n'Let's try again, ${userName}!`);
      break;
    } else if (numberRundom % 2 !== 0 && answer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.'\n'Let's try again, ${userName}!`);
      break;
    } else {
      console.log("Only 'yes' or 'no'");
      break;
    }
  }
};

greetings();
numbers();

export default numbers;
