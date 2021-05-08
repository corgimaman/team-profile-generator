const inquirer = require('inquirer');
const emailValid = require("email-validator");
const fs = require('fs');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const generateHTML = require('./functions.js')

let team = [];


function emailCheck(input){
    if (emailValid.validate(input)){
        return true;
    }
    return 'Please enter a valid e-mail address.';
};

function numberCheck(input){
    if (!isNaN(input)){
        return true;
    }
    return 'Please enter a valid number.'
}

function start() {inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID?',
      validate: numberCheck,
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your e-mail address?',
      validate: emailCheck,
    },
    {
      type: 'list',
      name: 'title',
      message: 'What is your job title?',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
        validate: numberCheck,
        when: function(answers) {
            return answers.title === 'Manager';
        }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username:',
      when: function(answers) {
          return answers.title === 'Engineer';
      }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school are you attending?',
        when: function(answers) {
            return answers.title === 'Intern';
        }
    },
    {
        type: 'confirm',
        name: 'again',
        message: 'Enter another Employee?',

    }
  ])
  .then((answers) => {
    let newEmployee = createEmployee(answers);
    team.push(newEmployee);
    if (answers.again === true) {
        start();
    } else {
        let managerCheck = team.filter(emp => {return emp.getRole() === "Manager"});
        if (managerCheck[0]){
            console.log("Yay you did it - html rendering")
            const htmlPageContent = generateHTML(team);
            fs.writeFile('../dist/index.html', htmlPageContent, (err) =>
              err ? console.log(err) : console.log('Successfully created your html!')
            ); 
        } else {
            console.log("Error! You must include at least one manager. Please enter one now.");
            start();
        }
        // console.log(answers);
        // console.log(newEmployee);
    }
    //console.log("the team!" , team);


  });
};

function createEmployee(answers){
    let newEmployee;
    if (answers.title === 'Manager'){
      newEmployee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    } else if(answers.title === 'Engineer'){
      newEmployee = new Engineer(answers.name, answers.id, answers.email, answers.github);
    } else if(answers.title === 'Intern') {
      newEmployee = new Intern(answers.name, answers.id, answers.email, answers.school);
    }

    return newEmployee;
};

start();