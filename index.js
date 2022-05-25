
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Could you briefly describe your project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter instructions for installing this app.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Add any additional instructions for using your application.',
  },
  {
    type: 'list',
    message: 'Which license is covers your application?',
    name: 'license',
    choices: ["MIT", "APACHE 2.0", "BSD 3"],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please enter contribution guidelines for other developers.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please enter testing instructions for your application.',
  },
  {
    type: 'input',
    name: 'user',
    message: 'What is your github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  fs.writeFileSync(path.join(__dirname,"/README.md"),generateMarkdown(answers));
});