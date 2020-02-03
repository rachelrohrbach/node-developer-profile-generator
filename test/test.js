"use strict";

const generateHtml = require("../generateHTML");

describe("generateHtml", () => {
  const data = {
    avatarUrl: "https://avatars1.githubusercontent.com/u/11085221?v=4",
    name: response1.name,
    username: "expecteduser",
    github: response1.html_url,
    bio: response1.bio,
    blog: "userblog",
    location: response1.location,
    followers: "10",
    following: response1.following,
    repos: response1.public_repos,
    stars: response2.length,
    color: ":red"
  };

  describe("when passed color as an argument", () => {
    it("should have passed color in response", () => {
      const html = generateHtml.generateHTML(data);
      expect(html).toContain("red");
    });
  });

  describe("when passed username as an argument", () => {
    it("should have username in response", () => {
      const html = generateHtml.generateHTML(data);
      expect(html).toContain("expecteduser");
    });
  });

  describe("when passed avatar url as an argument", () => {
    it("should have img with avatar url in response", () => {
      const html = generateHtml.generateHTML(data);
      expect(html).toContain(`<img src="https://avatars1.githubusercontent.com/u/11085221?v=4" alt="user-image">`);
    });
  });

  describe("when passed blog as an argument", () => {
    it("should have blog in response", () => {
      const html = generateHtml.generateHTML(data);
      expect(html).toContain("userblog");
    });
  });

  describe("when passed followers as an argument", () => {
    it("should have a number of followers in response", () => {
      const html = generateHtml.generateHTML(data);
      expect(html).toContain("10");
    });
  });

});
