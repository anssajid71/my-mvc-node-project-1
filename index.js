const readline = require('readline');
const controller = require('./controller');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', function(name) {
  controller.generateGreeting(name);
  rl.close();
});
