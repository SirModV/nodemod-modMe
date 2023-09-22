function renderLicenseBadge(license) {
  const licenses = {
    MIT: {
      badge:
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      link: "[MIT License](https://opensource.org/licenses/MIT)",
    },
    "Apache 2.0": {
      badge:
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      link: "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)",
    },
    "GNU GPLv3": {
      badge:
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      link: "[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)",
    },
  };

  const selectedLicense = licenses[license];
  if (!selectedLicense) {
    return "";
  }
  return selectedLicense.badge;
}

function renderLicenseLink(license) {
  const licenses = {
    MIT: {
      badge:
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      link: "[MIT License](https://opensource.org/licenses/MIT)",
    },
    "Apache 2.0": {
      badge:
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      link: "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)",
    },
    "GNU GPLv3": {
      badge:
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      link: "[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)",
    },
  };
  const selectedLicense = licenses[license];
  if (!selectedLicense) {
    return "";
  }
  return selectedLicense.link;
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);

  let licenseSection = "";
  if (licenseBadge && licenseLink) {
    licenseSection = `## License\nThis project is licensed under the ${licenseLink}.`;
  } else {
    licenseSection = "## License\nThis project has no specific license.";
  }

  return `# ${data.title}
${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${licenseBadge ? "- [License](#license)" : ""}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
