# ${data.projtitle}

## Description

```md
${data.descr}


```

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How-to-Contribute](#how-to-contribute)
- [Tests](tests)

## Installation

${data.installioninstructions}

## Usage

```md
${data.usageinfo}

<!-- these are hidden comments. Will not be processed by code.
The line below is an And operator and will evaluate as a truthie.  
Therefore, if left is not true, entire line will be ignored and nothing displayed. 
line 37: ![alt-text](img-url)  markdown image passed from javascript. All we've done
is replaced the image url with a variable.  Same logic for medial file.

-->
${data.imageurl && `![example image](${data.imageurl})`}

${data.mediaurl && `![example media file](${data.mediaurl})`}

## Credits

${data.creditsinfo} 

## License

${data.license} 

## Badges

N/A

## Features

```md
The main features in this project are:
${features}
```
## How-to-Contribute

N/A

## Test Instructions

${data.testinstructions}
  
## Contact Info

Feel free to contact me with any questions.

My github username is: ${data.githubusername}.

My email is: ${data.email}.