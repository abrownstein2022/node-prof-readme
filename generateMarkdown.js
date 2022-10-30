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
//don't need \n in template strings/string literals only in regular text lines (that have single and double quotes)
//template strings literallly interpret white space
//follow heading elements only with space for them to be interpreted as heading
// the content between the backticks is called a string literal
function generateMarkdown(data) {
  return `
My title is ${data.projtitle}
My descr is ${data.descr}
Installation instructions are ${data.installioninstructions}
My usage info is ${data.usageinfo}
image ${imageurl}
media  ${mediaurl}
My credits info is ${data.creditsinfo} 
My test instructions are ${data.testinstructions}
My license is ${data.license} 
My GitHub username is ${data.githubusername}
My email address is ${data.email} 
features  ${features}
  `
;
}

//makes this file available to be used as include file in require statement
module.exports = generateMarkdown;  