const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./generateLogo')

// QUESTIONS THAT WILL BE PROMPTED INTO THE TERMINAL
const questions = [
  {
    type: 'list',
    message: 'What shape would you like to use?',
    name: 'shape',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    message: 'What color do you want your shape to be?',
    name: 'color'
  },
  {
    type: 'input',
    message: 'Enter three characters you would like to be in your shape',
    name: 'characters'
  },
  {
    type: 'input',
    message: 'What color would your text characters to be?',
    name: 'character_color'
  }
]

function writeToFile(name, data) {
  const file = generateLogo(data);
  fs.writeFile(name, file, (error) => {
    if (error) {
      return console.log(error)
    }
    console.log('SVG Logo is generated successfully!')
  });
}

function init() {
  inquirer.prompt(questions)
    .then((data) => {
      const name = 'logo.svg';
      writeToFile(name, data);
    });
}
init();