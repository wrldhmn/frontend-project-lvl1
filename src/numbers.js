import readlineSync from 'readline-sync';

const numbers = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  for (let i = 0; i < 3; i += 1) {
    const numberRundom = Math.floor(Math.random() * 100);
    console.log(`Question: ${numberRundom}`);
    const answer = readlineSync.question('Answer: ');

    if (numberRundom % 2 === 0 && answer === 'yes' || numberRundom % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      if (i === 2) {
        console.log('Congratulations, Bill!');
      }
    } else if (numberRundom % 2 === 0 && answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.'\n'Let's try again, Bill!");
      i = -1;
    } else if (numberRundom % 2 !== 0 && answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.'\n'Let's try again, Bill!");
      i = -1;
    } else {
      console.log("Only 'yes' or 'no'");
      i -= 1;
      continue;
    }
  }
  
};

export default numbers;