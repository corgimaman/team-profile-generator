{
    type: 'input',
    name: 'managername',
    message: "Please enter the manager's name:",
  },
  {
    type: 'input',
    name: 'managerid',
    message: "Please enter the manager's ID:",
    validate: numberCheck,
  },
  {
    type: 'input',
    name: 'manageremail',
    message: "Please enter the manager's e-mail:",
    validate: emailCheck,
  },
  {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter the manager's office number:",
      validate: numberCheck,
  },
  {
      type: 'confirm',
      name: 'again',
      message: 'Would you like to enter another Employee?',
      
  },
  {
    type: 'list',
    name: 'title',
    message: 'What is their job title?',
    choices: ['Engineer', 'Intern']
  },
  {
      type: 'input',
      name: 'name',
      message: 'Please enter their name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter their ID:',
      validate: numberCheck,
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter their e-mail address:',
      validate: emailCheck,
    },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter their GitHub Username:',
    when: function(answers) {
        return answers.title === 'Engineer';
    }
  },
  {
      type: 'input',
      name: 'school',
      message: 'What school are they attending?',
      when: function(answers) {
          return answers.title === 'Intern';
      }
  }