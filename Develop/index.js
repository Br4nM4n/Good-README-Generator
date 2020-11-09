var fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// array of questions for user
const questions  =  [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
      },
      {
        type: "input",
        message: "Please give a description your project?",
        name: "description"
      },
      {
        type: "checkbox",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None" 
        ]
      },
      {
        type: "input",
        message: "What command should be run to install depenencies?",
        name: "installation"
      },
      {
        type: "input",
        message: "What command should be run to test?",
        name: "test"
      },
      {
        type: "input",
        message: "What does user need to know about using this repo?",
        name: "usage"
      },
      {
        type: "input",
        message: "What are some commom questions concerning you project?",
        name: "commonQuestions"
      }
     
];

// function to write README file
 function writeToFile(fileName, data) {
    fs.writeFile("README.md"+fileName, data, err => {
        if(err){
            throw err;
        }
    });

        
}

// function to initialize program
async function init() {
 inquirer.prompt(questions).then(answers =>{
     const response = generateMarkdown(answers);
     console.log(answers);
 })

   
    

}

// function call to initialize program
init();
