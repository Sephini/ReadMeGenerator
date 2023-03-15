const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const homeDir = require("os").homedir();
const filePath = path.join(homeDir, "documents", "README.md");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a brief description:",
  },
  {
    type: "input",
    name: "contents",
    message: "Add table of contents:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation guide:",
  },
  {
    type: "input",
    name: "notes",
    message: "Add some notes on usage:",
  },
  {
    type: "input",
    name: "license",
    message: "Enter license name:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Add steps for contributing:",
  },
  {
    type: "input",
    name: "tests",
    message: "Describe how to run the tests:",
  },
  {
    type: "input",
    name: "questions",
    message: "Any questions?",
  },
];

// function to write README file
function writeToFile(data) {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("README.md created successfully");
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile(generateMarkdown(answers));
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(
          "Response could not be rendered in the current environment"
        );
      } else {
        console.log("Something went wrong, please try again", error);
      }
    });
}

// function call to initialize program
init();