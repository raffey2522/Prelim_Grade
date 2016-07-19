const util = require('./mymodule');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nEnter a Grade: ', (answer) => {
  // TODO: Log the answer in a database
}