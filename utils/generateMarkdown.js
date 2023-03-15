// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

 ${data.description}

 ## Contents

 ${data.contents}

  ## Installation

  ${data.installation}

  ## Notes

  ${data.notes}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions}
`;
}

module.exports = generateMarkdown;