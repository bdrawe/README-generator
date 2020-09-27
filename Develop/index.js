const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



//array of questions for user
const questions = () => {
    return inquirer.prompt ([
        {
           type:'input',
           name: 'githubUser',
           message: "What is your github username?",
           validate: githubUser => {
           if (githubUser){
            return true;
          } else {
            console.log('Please enter your Github User Name!');
            return false;
          }
        }
        },
        {
            type:'input',
            name: 'email',
            message: "What is your email where people can contact you?",
            validate: githubUser => {
            if (githubUser){
             return true;
           } else {
             console.log('Please enter your email!');
             return false;
           }
         }
         },
       {
           type:'input',
           name:'title',
           message: 'What is the name of your project?',
           validate: projectTitle => {
            if (projectTitle){
             return true;
           } else {
             console.log('Please provide a name for your project');
             return false;
           }
         }
       },
       {
           type:'input',
           name: 'description',
           message: 'Please give a detailed description of your project',   
           validate: description => {
            if (description){
             return true;
           } else {
             console.log('Please provide a detailed description of your project');
             return false;
           }
         }
       },
       {
           type:'input',
           name: 'installation',
           message: 'Please provide installation instructions',
           validate: installation => {
            if (installation){
             return true;
           } else {
             console.log('Please provide installation instructions');
             return false;
           }
         }
       },
       {
           type:'input',
           name: 'useInfo',
           message: 'Please provide instruction/examples on how this App would be used.',
           validate: useInfo => {
            if (useInfo){
             return true;
           } else {
             console.log('Please provide instruction/examples on how this App would be used.');
             return false;
           }
         }
       },
       {
           type:'input',
           name: 'contributor',
           message: 'Please list the developers that helped in the project.',
           validate: contributor => {
            if (contributor){
             return true;
           } else {
             console.log('Please list the contributors');
             return false;
           }
         }
       }, 
       {
           type: 'checkbox',
           name: 'license',
           message: 'What type of license would fit your project?',
           choices: [
            '![APM](https://img.shields.io/badge/APM-MIT-green)', 
            '![AUR](https://img.shields.io/badge/AUR-Apache-blue)', 
            '![Bower](https://img.shields.io/badge/Bower-MIT-green)', 
            '![Cocoapods](https://img.shields.io/badge/Cocoapods-MIT-%23373737)', 
            '![Conda](https://img.shields.io/badge/Conda-MIT-green)', 
            '![CPAN](https://img.shields.io/badge/CPAN-lgpl__2__1-blue)', 
            '![CRAN/METACRAN](https://img.shields.io/badge/CRAN-GPL%20(%3E%3D%202)-blue)', 
            '![Crates.io](https://img.shields.io/badge/Crates-MIT%2FApache--2.0-blue)', 
            '![CTAN](https://img.shields.io/badge/CTAN-ppl1.3c%2C%20ofl-lightgrey)', 
            '![DUB](https://img.shields.io/badge/DUB-MIT-green)', 
            '![Eclipse](https://img.shields.io/badge/Eclipse-GPL-blue)', 
            '![Github](https://img.shields.io/badge/Github-MIT-green)', 
            '![Hex](https://img.shields.io/badge/Hex-Apache%202-blue)', 
            '![NPM](https://img.shields.io/badge/NPM-MIT-green)', 
            '![Packagist](https://img.shields.io/badge/Packagist-MIT-green)', 
            '![PyPI](https://img.shields.io/badge/PyPI-BSD-green)'
           ],
           validate: license => {
            if (license){
             return true;
           } else {
             console.log('What type of license would fit your project?');
             return false;
           }
         }
       },
       {
           type:'input',
           name: 'userTests',
           message: 'Please provide a description of past test you have performed on your app.',
           validate: userTests => {
            if (userTests){
             return true;
           } else {
             console.log('Please provide a description of past test you have performed on your app.');
             return false;
           }
         }
       }
   ])
}

const write = (data) =>{
    fs.writeFile('./dist/readme.md', data, err => {
        if (err) throw err;
      
        console.log('markdown file complete!');
      });
}


questions()
    .then(data => {console.log("Done"); return data})
        
    .then(data =>{
        return generateMarkdown(data)
    })
    .then(writeMd => {
        return write(writeMd);
    })
    .catch(error =>{
        console.log(error + " Whoops! It looks like something is wrong with your code!")
    })
        

     
    
 


