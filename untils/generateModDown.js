function modReadme (data) {
return `
# ${data.title}


## Discription
${data.discripton}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing 
${data.contributing}

## Tests
${data.tests}

## Questions
Link to email at ${data.email} and github profile [here](${data.github}).
 `;
}

module.export = modReadme;