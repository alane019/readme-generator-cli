const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util'); 
// array of questions for user
const questions = () => { return inquirer.prompt([
//Any and all questions that have to be answered when preparing a readme file. 
	{
	 type: 'input',
	 name: 'readmeTitleHeading',
	 message: "Name of repository as it should appear in H1 heading at the top of readme: ",
	},
	{
	type: 'input',
	name: 'repoName',
	message: "Name of repository as it should in the Github URL: ",
	},
	{
	type: 'input',
	name: 'overviewDescription',
	message: "Short description of ",
	},
	{
	type: 'input',
	name: 'installation',
	message: "Installation instructions: ",
	}, //Installation, Usage, License, Contributing, Tests, and Questions
	{
	type: 'input',
	name: 'usage',
	message: "Usage instructions: ",
	},
	{
	type: 'input',
	name: 'contribution',
	message: "How to contribute: ",
	},
	{
	type: 'input',
	name: 'githubUsername',
	message: "Github username: ",
	},
])};

// function to write README file
function writeToFile(fileName, data) {
 //add js here to write specified data to specified readme file. 


}

// function to initialize program
function init() {

 // js to ask questions, and prepares response data to be passed to the writeFile function above; 


}

// function call to initialize program
init();
