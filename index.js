"use strict";

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
// const fetch = require("node-fetch");
// const prompts = require("./prompts");
const generateHTML = require("./generateHTML");

// const writeFileAsync = util.promisify(fs.writeFile);

async function getGitHubInfo() {
  try {
    const { username, color } = await inquirer.prompt([
      {
        name: "username",
        type: "ipnut",
        message: "Enter your GitHub username:"
      },
      {
        name: "color",
        type: "list",
        message: "What is your favorite color?",
        choices: ["red", "blue", "pink", "green"]
      }
    ]);

    const { data: response1 } = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const { data: response2 } = await axios.get(
      `https://api.github.com/users/${username}/starred`
    );
    // console.log(response1);
    // console.log(response2);

    const html = generateHTML({
      avatarUrl: response1.avatar_url,
      name: response1.name,
      username: response1.login,
      github: response1.html_url,
      bio: response1.bio,
      blog: response1.blog,
      location: response1.location,
      followers: response1.followers,
      following: response1.following,
      repos: response1.public_repos,
      stars: response2.length,
      color: color
    });

    fs.writeFile("index.html", html, err => {
      console.log(err);
    });

    // await writeFileAsync('index.html', html);
    // console.log('Successfully wrote to index.html');
  } catch (error) {
    console.log(error);
  }
}

getGitHubInfo();
