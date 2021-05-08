var cards = []

generateHTML = (team) => {
    team.forEach((teamMember) => {
        if (teamMember.getRole() === 'Manager'){
            console.log('HHELLO from for each!!')
            makeManager(teamMember)
        } else if (teamMember.getRole() === 'Engineer') {
            makeEngineer(teamMember)
        } else if (teamMember.getRole() === 'Intern') {
            makeIntern(teamMember)
        } 
    })

return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Page</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid" style="background-color: #eca0ff">
  <div class="container">
    <h1 class="display-4">Hi! My name is  👋🏽</h1>
    <p class="lead">I live in  My favorite hobby is  and my favorite food is .</p>
    <h3><span class="badge badge-info">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item text-white bg-dark">My GitHub username is <a href="https://github.com/$}" class="text-info">githuv}</a></li>
      <li class="list-group-item bg-dark"><a href="" class="text-info">My LinkedIn</a></li>
    </ul>
    ${cards.join('')}
  </div>
</div>
</body>
</html>`;
}

function makeManager (manager){
    cards.push( `
    
    <div>
    <h1> ${manager.name}</h1>
    </div>
    `)
}
function makeEngineer (engineer){
    cards.push( `
    
    <div>
    <h1> ${engineer.name}</h1>
    </div>
    `)
}
function makeIntern (intern){
    cards.push( `
    
    <div>
    <h1> ${intern.name}</h1>
    </div>
    `)
}

module.exports = generateHTML;