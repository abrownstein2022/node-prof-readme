// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// const generateREADME = ({ projtitle, descr, installioninstructions, usageinfo, contributionguidelines, testinstructions, license, githubusername, email}) =>
//   `hello readme`;

function inquirerCode(handleAnswers) {
  const processedAnswer = "My Title";
  handleAnswers(processedAnswer);
}

//use one function to validate user input to questions below
function validateInput(message) {
  return function(answer) {
    if (answer.length < 1) {
        return console.log(`Please enter a ${message}:`);
    }
    return true;
   }
}


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projtitle',
      message: 'Enter the project title:',
      validate: validateInput("project title")
    },
    {
      type: 'input',
      name: 'descr',
      message: 'Enter the description:',
      validate: validateInput("descr")
    },
    {
      type: 'input',
      name: 'installioninstructions',
      message: 'Enter the installation instructions:',
      validate: validateInput("installationinstructions")
    },
    {
      type: 'input',
      name: 'usageinfo',
      message: 'Enter the usage information:',
      validate: validateInput("usageinfo")
    },
    {
      type: 'input',
      name: 'imageurl',
      message: 'Include image URL?  Leave blank for none.'
    },
    {
      type: 'input',
      name: 'mediaurl',
      message: 'Include media URL?  Leave blank for none.'
    },
    {
      type: 'input',
      name: 'creditsinfo',
      message: 'Enter the credits information:',
      validate: validateInput("creditsinfo")
    },
    {
      type: 'list',
      name: 'license',
      choices: ['MIT', 'GPL', 'Apache 2.0', 'MPL-2.0', 'CDDL-1.0','none'],
      default: 'MIT',
      message: 'Select a license:',
    },
    {
      type: 'input',
      name: 'features',
      message: 'Enter the features information:',
      validate: validateInput("features")
    },
    {
      type: 'input',
      name: 'contributioninfo',
      message: 'Enter the how-to-contribute information:',
      validate: validateInput("contributioninfo")
    },
    {
      type: 'input',
      name: 'testinstructions',
      message: 'Enter the test instructions:',
      validate: validateInput("testinstructions")  
    },
    {
      type: 'input',
      name: 'githubusername',
      message: 'Enter your GitHub username:',
      validate: validateInput("githubusername")
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
      validate: validateInput("email")
    }
  ];


// .then((answers) => {
//     const readmePageContent = generateREADME(answers);

//     fs.writeFile('README.md', readmePageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created README file!')
//     );
//   });

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
      if (err) {
        return console.log(err);
      }
      console.log("Your README.md file has been generated!")
  });
}


// TODO: Create a function to initialize app
//date.now() means today's date.  Output this way to get unique test file each time.  Will change once project is complete.
//writeToFile("README" + Date.now() + ".md", generateMarkdown(userInput));
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
      console.log(userInput)
      writeToFile("README.md", generateMarkdown(userInput));
  });
};

// Function call to initialize app
init();
