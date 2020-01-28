"use strict";

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// const generateHTML = require('./generateHTML');
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

// function writeToFile(fileName, data) {}

// function init() {}

// init();

inquirer.prompt({
  message: 'Enter your GitHub username:',
  name: 'username'
    },
    {
      type: "list",
      name: "colors",
      message: "What is your favorite color?",
      choices: ["red", "blue", "pink", "green"],
    })
  .then(({ username }) => {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(res => {
      console.log(res);
    //   const repoNames = res.data.map(repo => repo.name);

    //  repoNames = repoNames.join('\n');

    //   fs.writeFile('repos.txt', repoNames, err => {
    //     if (err) {
    //       throw err;
    //     }

    //     console.log(`Saved ${repoNames.length} repos`);
    //   });
        });
  });
