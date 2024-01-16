const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'list',
        message: 'What shape would you like to use?',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        
    }
]










inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });