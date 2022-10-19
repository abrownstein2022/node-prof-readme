// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//      choices: ['MIT', 'GPL', 'Apache', 'compliant', 'ppl1.3c-ofl','none'],
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `hello there world!
  \nMy title is ${data.projtitle}
  \nMy descr is ${data.descr}
  \nInstallation instructions are ${data.installioninstructions}
  \nMy usage info is ${data.usageinfo}
  \nMy contribution guidelines is ${data.contributionguidelines} 
  \nMy test instructions are ${data.testinstructions}
  \nMy license is ${data.license} 
  \nMy GitHub username is ${data.githubusername}
  \nMy email address is ${data.email} 
  
  
  `
;
}

//makes this file available to be used as include file in require statement
module.exports = generateMarkdown;  