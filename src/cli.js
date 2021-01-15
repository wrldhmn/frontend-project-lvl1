import readlineSync from 'readline-sync';

const userName = [];
const greetings = () => {
  console.log('Welcome to the Brain Games');
  userName[0] = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export { greetings, userName };
