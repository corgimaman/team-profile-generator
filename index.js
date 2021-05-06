const inquirer = require('inquirer');
const emailValid = require("email-validator");
const fs = require('fs');
const Employee = require('./lib/Employee');

function emailCheck(input){
    if (emailValid.validate(input)){
        return true
    }

    return 'Please enter a valid e-mail address.'
};

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
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your e-mail address?',
      validate: emailCheck
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