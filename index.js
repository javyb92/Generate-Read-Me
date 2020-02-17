const fs = require("fs");
// const path = require("path");
const inquirer = require("inquirer")   
const axios = require("axios")
const util = require("util");

    //Questions asked with prompt of inquirer
const writeToFileAsync = util.promisify(fs.writeFile);
function promptUser(){
    return inquirer.prompt([
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
                message:"How do you install the project?",
                name:"projectInstallation"
            },
            {   
                type: "input",
                message:"What is the project built with?",
                name:"projectAssets"
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
    ]);
}


//Insert answers in preformatted ReadMe.md file
function generateReadMe(answers){
    return `
    ![social](https://img.shields.io/github/followers/${answers.userName}?style=social)

    # ${answers.projectTitle}

    ## About The Project
    ${answers.projectDescription}
    
    ### Built With
    ${answers.projectAssets}

    ### Installation
    ${answers.projectInstallation}
    
    ## Usage


    ## Testing
    ${answers.projectTesting}
    
    ## License
    ${answers.projectLicenses}

    ## Contact
    
    ![Javier]("Javier")


    Github Link: https://github.com/${answers.userName}
    
    Email Link: ${answers.userEmail}
    
    Project Link: 
    
   
   
    `}


//init function at startup       
async function init() {
    try{

        const answers = await promptUser();
        console.log(answers)
        const newReadMe = generateReadMe(answers);
        await writeToFileAsync ("README.md", newReadMe);
        
        const queryUrl = `https://api.github.com/users/${answers.userName}/repos?per_page=100`;
        axios.get(queryUrl).then(function(data) {
        console.log(data);
        // var myEmail=data.data[0].payload.commits[0].author.email;
        // var myPicture = data.data[0].actor.avatar_url;
        //   console.log(myEmail);
        //   console.log(myPicture);
    });  

}
    catch(err){
        console.log(err)
        inquirer.prompt(answers)
}



}

// starts the app
init();