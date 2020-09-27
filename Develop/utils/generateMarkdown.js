const generateMarkdown = (data) => {
  return `
  # ${data.Title}
 
  ##Table of Contents
 
    [Description](##Description)
    [Installation](##Installation)
    [How to Use it](##Use-case)
    [Contributors](##Contributors)
    [License](##License)
 
 
  ## Description
  ${data.description}
 
  ##Installation
  ${data.installation}
 
  ##Use-case
  ${data.useInfo}
 
  ##Contributors
  ${data.contributor}
 
  ##License
  ${data.license}
  `;
 };

module.exports = generateMarkdown;
