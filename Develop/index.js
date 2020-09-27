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
           choices: ['MIT','ICS','Apache License 2.0','GNU GPLv3'],
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
    fs.writeFile('./dist/readme.md', generatePage(data), err => {
        if (err) throw err;
      
        console.log('markdown file complete!');
      });
}


questions()
    .then(data => console.log("Questions Done"))
    .then(data =>{
        return generateMarkdown(data)
    })
    .then(writeMd => {
        return write(writeMd);
    })
    .catch(error =>{
        console.log(error + " Whoops! It looks like something is wrong with your code!")
    })
        

     
    
 

// questions()
    // .then(console.log(data))
        
    // .then(writeToFile(filename,data));

// // function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('./dist/README.md', data, err =>{
//         if (err) throw err

//         console.log("Markdown File made! ")
//     })
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
