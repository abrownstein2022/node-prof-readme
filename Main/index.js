// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ projtitle, descr, installioninstructions, usageinfo, contributionguidelines, testinstructions, license, githubusername, email}) =>
  `hello readme`;


// TODO: Create an array of questions for user input
//const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      name: 'projtitle',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'descr',
      message: 'Enter the description:',
    },
    {
      type: 'input',
      name: 'installioninstructions',
      message: 'Enter the installation instructions:',
    },
    {
      type: 'input',
      name: 'usageinfo',
      message: 'Enter the usage information:',
    },
    {
      type: 'input',
      name: 'contributionguidelines',
      message: 'Enter the contribution guidelines:',
    },
    {
      type: 'input',
      name: 'testinstructions',
      message: 'Enter the test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      choices: ['MIT', 'GPL', 'Apache', 'compliant', 'ppl1.3c, ofl','none'],
      default: 'MIT',
      message: 'Select a license:',
    },
    {
      type: 'input',
      name: 'githubusername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    },        
])
.then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README file!')
    );
  });

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
