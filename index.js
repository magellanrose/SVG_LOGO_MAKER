const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./generateLogo')

const questions = [
    {
        type: 'list',
        message: 'What shape would you like to use?',
        name: 'shape',
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
      type: 'input',
      message: 'What color do you want your shape to be?',
      name: 'color'
        
    }
]

function writeToFile(name, data){
  const file = generateLogo(data);
  fs.writeFile(name, file, function(error) {
    if (error) {
      return console.log(error)
    }
    console.log('Logo is generated!')
});
}

function init() {
  inquirer.prompt(questions).then(function(data){
    const name = 'logo.svg';
    writeToFile(name, data);
  });
}
init();








// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });