const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions for user
const questions = [
//Any and all questions that have to be answered when preparing a readme file. 
	{
	type: 'input',
	name: 'readmeTitleHeading',
	message: "Name of repository as it should appear in H1 heading at the top of readme: ",
	},{
	type: 'input',
	name: 'repoName',
	message: "Name of repository as it should in the Github URL: ",
	},{
	type: 'input',
	name: 'overviewDescription',
	message: "Short description of ",
	},{
	type: 'input',
	name: 'installation',
	message: "Installation instructions: ",
	},{
	type: 'input',
	name: 'usage',
	message: "Usage instructions: ",
	},{
	type: 'input',
	name: 'contribution',
	message: "How to contribute: ",
	},{
	type: 'input',
	name: 'githubUsername',
	message: "Github username: ",
	},{
	type: 'input',
	name: 'screenshotPath',
	message: "Relative path to screenshot image, for image source URL: ",
	}
]; // end questions; 

// function to write README file
function writeToFile(fileName, data) {
 //add js here to write specified data to specified readme file. 
	fs.writeFile(fileName, data, function(err){
		if(err){
			console.log(err); 
		} else {
			console.log("Success:  File was created!")
		}
	})
}

// function to initialize program
function init() {
	inquirer.prompt(questions).then(answers => {
		writeToFile("README.md", generateMarkdown(answers))
	});
}	

// function call to initialize program
init();
