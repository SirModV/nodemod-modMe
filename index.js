const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateModDown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of you project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Chosse a license for you project:',
        chocies: ['None', 'MIT']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How would you like others to contribute',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instruction',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter you Github username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address',
    },
]

