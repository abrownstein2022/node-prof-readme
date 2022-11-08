// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//      choices: ['MIT', 'GPL', 'Apache', 'compliant', 'ppl1.3c-ofl','none'],
function renderLicenseBadge(license) {
//  https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>

switch(license){
  case "MIT": return "https://img.shields.io/badge/license-MIT-lightgreen"
  case "GPL": return "https://img.shields.io/badge/license-GPL-black"
  case "Apache 2.0": return "https://img.shields.io/badge/license-Apache-blue"
  case "MPL-2.0": return "https://img.shields.io/badge/license-compliant-blue"
  case "CDDL-1.0": return "https://img.shields.io/badge/license-ppl1.3c-ofl-red"
  default:  return "https://img.shields.io/badge/license-Apache-gray"
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//this is to give a link to the full license so it can be read if desired
function renderLicenseLink(license) {
  switch(license){
    case "MIT": return "https://opensource.org/licenses/MIT"
    case "GPL": return "https://opensource.org/licenses/gpl-license"
    case "Apache 2.0": return "https://opensource.org/licenses/Apache-2.0"
    case "MPL-2.0": return "https://opensource.org/licenses/MPL-2.0"
    case "CDDL-1.0": return "https://opensource.org/licenses/CDDL-1.0"
    default:  return "https://img.shields.io/badge/license-Apache-gray"
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// We are putting this template literal directly in this function which will be put in the license section. 
//Need to wrap the whole sentence in the quotes.  This is read literally so blank lines and initial blank spaces
//are read as entered.
//to get license link, call the function above, but must be inside ${ } to be treated as a function and not just plain text.
//no semi-colon needed but should have extra line between the 2 function calls
//This section will be rendered as seen below so just need to call renderLicenseSection(license) below in readme md file creation
//use return below to actually return the string back to where it was called.
//Since we're passing license here, only pass license inside the ${} not data. since
//not an object, it's a parameter.
//in markdown file, need to wrap the url in a markdown style link, which is []()
//with no period or spacing.  For image link, must put ![alt-text](link)
function renderLicenseSection(license) {
return `## License

 \`\`\`md
 ${license} 
\`\`\`

Link to license text:
${renderLicenseLink(license)}


![badge](${renderLicenseBadge(license)})
`
}

//https://github.com/abrownstein2022 
//need to handle github profile link piece the esame as rendering license so we can use the github username entered.
function renderGitHubLink(githubusername){
  let githublink = 'https://github.com/' + githubusername;
  return `My GitHub Profile link:
  
  \`\`\`md
  ${githublink}
 \`\`\`
 `
 }

// TODO: Create a function to generate markdown for README
//don't need \n in template strings/string literals only in regular text lines (that have single and double quotes)
//template strings literallly interpret white space
//follow heading elements only with space for them to be interpreted as heading
// the content between the backticks is called a string literal
// notes from readme file template: 
//The line below is an And operator and will evaluate as a truthie.  
// Therefore, if left is not true, entire line will be ignored and nothing displayed. 
// line 37: ![alt-text](img-url)  markdown image passed from javascript. All we've done
// is replaced the image url with a variable.  Same logic for medial file.
//note also: have to escape the backticks when you're already inside
//another string literal, which is why we had to use this below in all
//instances of md being used.
// \`\`\`md
// ${data.descr}
// \`\`\`
//for the badge to be an image, need to handle like images below
//below for image and media url rendering, this is an if then else statement and returns "" string if no value entered by user
//${data.imageurl ? `![example image](${data.imageurl})`:""}

function generateMarkdown(data) {
return `# ${data.projtitle}

![license](${renderLicenseBadge(data.license)})

## Description

\`\`\`md
${data.descr}
\`\`\`

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How-to-Contribute](#how-to-contribute)
- [Tests](#test-instructions)
- [Questions](#questions)

## Installation

\`\`\`md
${data.installioninstructions}
\`\`\`

## Usage

\`\`\`md
${data.usageinfo}
\`\`\`

${data.imageurl ? `![example image](${data.imageurl})`:""}

${data.mediaurl ? `![example media file](${data.mediaurl})`:""}

## Credits

\`\`\`md
${data.creditsinfo} 
\`\`\`

${renderLicenseSection(data.license)}

## Features

\`\`\`md
The main features in this project are:
${data.features}
\`\`\`

## How-to-Contribute

\`\`\`md
${data.contributioninfo}
\`\`\`

## Test Instructions

\`\`\`md
${data.testinstructions}
\`\`\`

## Questions

\`\`\`md
Feel free to contact me with any questions.

My email is: ${data.email}.
\`\`\`

${renderGitHubLink(data.githubusername)}
`
;
}

//makes this file available to be used as include file in require statement
module.exports = generateMarkdown;  