const fs = require('fs');

const inquirer = require('inquirer');

// import { prompt } from 'inquirer';

// array of questions for user
// const questions = () => {
inquirer
     .prompt ([
        {
            type:'input',
            name: 'projName',
            message: 'What is your projects name?'
        },
        {
            type:'input',
            name: 'description',
            message: 'Please give a detailed description of your project'   
        },
        {
            type:'input',
            name: 'installation',
            message: 'If any, please provide installation instructions'
        },
        {
            type:'input',
            name: 'useInfo',
            message: 'Please provide instruction/examples on how this App would be used.'
        },
        {
            type:'input',
            name: 'contributor',
            message: 'Please list the developers that helped in the project.'
        }, 
        {
            type: 'checkbox',
            name: 'license',
            message: 'What type of license would fit your project?',
            choices: ['MIT','ICS','Apache License 2.0','GNU GPLv3']
        },
        {
            type:'input',
            name: 'userTests',
            message: 'Please provide a description of past test you have performed on your app.'
        }

    ])
// }


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
