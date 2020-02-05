"use strict";

const generateHtml = require("../generateHTML");

describe("generateHtml", () => {
  const data = {
    avatarUrl: "https://avatars1.githubusercontent.com/u/11085221?v=4",
    name: "Rachel Rohrbach",
    username: "expecteduser",
    github: 'https://api.github.com/users/rachelrohrbach',
    bio: 'Aspiring developer currently enrolled in the University of Washington Full Stack Development Boot Camp',
    blog: "userblog",
    location: 'Seattle, WA',
    followers: "10",
    following: "10",
    repos: "20",
    stars: "2",
    color: ":red"
  };

  describe("when passed color as an argument", () => {
    it("should have passed color in response", () => {
      const html = generateHTML(data);
     expect(html).toContain('#DE9967');
    });
  });

  describe("when passed username as an argument", () => {
    it("should have username in response", () => {
      const html = generateHTML(data);
      expect(html).toContain("expecteduser");
    });
  });

  describe("when passed avatar url as an argument", () => {
    it("should have img with avatar url in response", () => {
      const html = generateHTML(data);
      expect(html).toContain(`<img src="https://avatars1.githubusercontent.com/u/11085221?v=4" alt="user-image">`);
    });
  });

  describe("when passed blog as an argument", () => {
    it("should have blog in response", () => {
      const html = generateHTML(data);
      expect(html).toContain("userblog");
    });
  });

  describe("when passed followers as an argument", () => {
    it("should have a number of followers in response", () => {
      const html = generateHTML(data);
      expect(html).toContain("10");
    });
  });

});
