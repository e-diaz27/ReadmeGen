function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Contact](#contact)

## Installation

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

![License](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-blue.svg)

## Contribute

${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Contact

Github: ${data.user}
Email: ${data.email}
`
}

module.exports = generateMarkdown;
