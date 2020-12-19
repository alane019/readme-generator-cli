// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.readmeTitleHeading}
  Demo is viewable here: [https://${data.githubUsername}.github.io/${data.repoName}/](https://${data.githubUsername}.github.io/${data.repoName}/)
 
  ${data.overviewDescription}

  ![${data.screenshotPath}](${data.screenshotPath})

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}
`;
}

module.exports = generateMarkdown;
