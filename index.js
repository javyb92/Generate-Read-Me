var inquirer = require("inquirer")

inquirer
    .prompt([
        {
            type: "input",
            message:"What is your GitHub Username?",
            name:"username"
        },








    ])

    .then(function(response){

        if (response.username){
            console.log("Yay!")
        }
        
    })