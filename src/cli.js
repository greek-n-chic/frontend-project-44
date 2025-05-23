import readlineSync from 'readline-sync';

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const greeting = (name) => {
  return `Hello, ${name}!`;
};

export { getName, greeting };



