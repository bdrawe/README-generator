const fs = require('fs');

const inquirer = require('inquirer');

import generateMarkdown from './utils/generateMarkdown';

// import { prompt } from 'inquirer';
// import {generateMarkdown} from 'generateMarkdown'

// array of questions for user
 const questions = () => {
inquirer
     .prompt ([
         {
            type:'input',
            name: 'githubUser',
            message: "What is your github username?"
         },
        {
            type:'input',
            name: 'title',
            message: 'What is the name of your project?'
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
    ]);
 };

questions()
    .then(data => { return generateMarkdown(data)})
    .then
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/README.md', data, err =>{
        if (err) throw err

        console.log("Markdown File made! ")
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
