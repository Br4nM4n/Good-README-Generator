// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

 ##Table of contents
 *[Discription](#discription)
 *[License](#license)
 *[Installation](#installation)
 *[Test](#test)
 *[Usage](#usage)
 *[Common questions](#commonQuestions)

 ## Disctiption
 ${data.Discription}

 ## License
 ${data.License}

 ## Installation
 ${data.Inslallation}

 ## Test
 ${data.Test}

 ## Usags
 ${data.Usage}

 ##nQuestions
 ${data.Questions}
 
`;
}

module.exports = generateMarkdown;
