"use strict";

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const fetch = require("node-fetch");
const prompts = require("./prompts");
const html = require("./generateHTML");

const writeFileAsync = util.promisify(fs.writeFile);

inquirer.prompt([
  {
    type: "iput",
    message: "Enter your GitHub username:",
    name: "username"
  },
  {
    type: "list",
    name: "color",
    message: "What is your favorite color?",
    choices: ["red", "blue", "pink", "green"],
  }
])

  .then(({ username }) => {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(res => {
      console.log(res);
    });
  });

// function writeToFile(fileName, data) {}

// function init() {}

// init();
