const inquirer = require('inquirer');
const emailValid = require("email-validator");
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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

inquirer
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
      choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
      default: 'Employee'
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
    }
  ])
  .then((answers) => {
    //const htmlPageContent = generateHTML(answers);
    console.log(answers);
    // fs.writeFile('test.html', htmlPageContent, (err) =>
    //   err ? console.log(err) : console.log('Successfully created test.html!')
    // );
  });

  function createEmployee(answers){
      let newEmployee;
      if (answers.title === 'Manager'){
        newEmployee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      } else if(answers.title === 'Engineer'){
        newEmployee = new Engineer(answers.name, answers.id, answers.email, answers.github);
      } else if(answers.title === 'Intern') {
        newEmployee = new Intern(answers.name, answers.id, answers.email, answers.school);
      } else {
        newEmployee = new Employee(answers.name, answers.id, answers.email);
      }

      return newEmployee;
  }