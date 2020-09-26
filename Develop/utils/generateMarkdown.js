// function to generate markdown for README
module.exports = data => {
  return `
  
  # ${data.title}

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
}

module.exports = generateMarkdown;
