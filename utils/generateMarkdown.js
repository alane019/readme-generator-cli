// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.readmeTitleHeading}
  Demo is viewable here: [https://${data.githubUsername}.github.io/data.${repoName}/](https://${data.githubUsername}.github.io/data.${repoName}/)
 
  ${data.overviewDescription}

  ![screen.jpg](${data.screenshotPath})

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}
`;
}

module.exports = generateMarkdown;
