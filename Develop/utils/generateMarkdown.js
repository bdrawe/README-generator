
const createBadge = () => {

}
const generateMarkdown = (data) => {
  console.log(data);
  return `

  # ${data.title}

  ## Description
  ${data.description}
 
  ## Table of Contents
 
  - [Description](##Description)
  - [Installation](##Installation)
  - [How to Use it](##Usage)
  - [Contributors](##Contributors)
  - [License](##License)
 
  ## Installation
  ${data.installation}
 
  ## Usage
  ${data.useInfo}
 
  ## Contributors
  ${data.contributor}
 
  ## License

  ${data.license}

  ##Questions
  Feel free to reach out to me with any questions or issues you have with this product. You can reach out to me in the following ways below

  Contact me by [GitHub]("https://github.com/${data.githubUser}) or
  Shoot me an email directly: ${data.email}

  Please be concise and specific on your questions.



  `;
 };

module.exports = generateMarkdown;
