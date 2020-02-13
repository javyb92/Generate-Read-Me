const fs = require("fs");
const path = require("path");

var inquirer = require("inquirer")    
    
    const questions = [
        {
            type: "input",
            message:"What is your GitHub Username?",
            name:"userName"
        },
        {
            type: "input",
            message:"What is your email?",
            name:"userEmail"
        },
        {
            type: "input",
            message:"What is the title of your project?",
            name:"projectTitle"
        },
        {
            type: "input",
            message:"How would you describe your project?",
            name:"projectDescription"
        },
        {
            type: "input",
            message:"Who is this project for and how would they use it?",
            name:"projectUsage"
        },
        {
            type: "input",
            message:"How do you install the project?",
            name:"projectInstallation"
        },
        {
            type: "input",
            message:"What licenses did you use for the project?",
            name:"projectLicenses"
        },
        {
            type: "input",
            message:"How would you test the project?",
            name:"projectTesting"
        },


    ]

        
function init() {
    inquirer
        .prompt(questions)
        .then(function(answers){
            console.log(answers.userName)
            writeToFile('README.md', answers.userName)
        })
}
        
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

init();