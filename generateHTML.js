'use strict';

const colors = {
  green: {
    wrapperBackground: '#C1C72C',
    headerBackground: '#006400',
    headerColor: 'white',
    photoBorderColor: 'white'
  },
  blue: {
    wrapperBackground: '#5F64D3',
    headerBackground: '#26175A',
    headerColor: 'white',
    photoBorderColor: '#73448C'
  },
  pink: {
    wrapperBackground: '#FFB6C1',
    headerBackground: '#FF69B4',
    headerColor: 'white',
    photoBorderColor: 'white'
  },
  red: {
    wrapperBackground: '#DE9967',
    headerBackground: '#870603',
    headerColor: 'white',
    photoBorderColor: 'white'
  },
  purple: {
    wrapperBackground: '#9932cc',
    headerBackground: '#8b008b',
    headerColor: 'white',
    photoBorderColor: 'white'
  },
  yellow: {
    wrapperBackground: '#ffff00',
    headerBackground: '#ffd700',
    headerColor: 'black',
    photoBorderColor: 'white'
  }
};

function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <title>Document</title>
      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .wrapper {
         background-color: ${colors[data.color].wrapperBackground};
         padding-top: 100px;
         }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
         background-color: #E9EDEE;
         height: auto;
         padding-top: 30px;
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         }
         h3 {
         font-size: 2em;
         }
         h4 {
         font-size: 1.5em;
         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.2em;
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[data.color].headerBackground};
         color: ${colors[data.color].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         }
         .photo-header img {
         width: 250px;
         height: 250px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -75px;
         border: 6px solid ${colors[data.color].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         }
         .photo-header h1, .photo-header h2, .photo-header h5 {
         width: 100%;
         text-align: center;
         }
         .photo-header h1 {
         margin-top: 10px;
         }
         .photo-header h5 {
          margin-bottom: 10px;
         }

         .nav-link {
         margin: 5px 10px;
         width: 100%;
         text-align: center;
         padding: 20px 0;
         font-size: 1.1em;
         }
         .workExp-date {
         font-style: italic;
         font-size: .7em;
         text-align: right;
         margin-top: 10px;
         }
         .container {
         padding: 50px;
         padding-left: 100px;
         padding-right: 100px;
         }

         .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           margin-bottom: 20px;
         }

         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[data.color].headerBackground};
           color: ${colors[data.color].headerColor};
           margin: 20px;
         }
         
         .col {
         flex: 1;
         text-align: center;
         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .75; 
          } 
         }
      </style>
      </head>

<body>
  <div class="wrapper">
  <div id="pageHeader"></div>
      <header class="photo-header">
          <img src="${data.avatarUrl}" alt="user-image">
          <h1>Hi!</h1>
          <h2>My name is ${data.name}!</h2>
          <ul class="nav justify-content-center">
              <li class="nav-item">
                  <a class="nav-link" href="#"><i class="fas fa-location-arrow"></i>${data.location}</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href=${data.github}> <i class="fab fa-github-alt"></i> GitHub</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href=${data.blog}><i class="fas fa-rss-square"></i> Blog</a>
              </li>
          </ul>
          <h5>${data.bio}</h5>
      </header>
      <main>
          <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-4">
                  <div class="card text-center">
                      <div class="card-body">
                          <h3 class="card-title">Public Repositories</h3>
                          <h5>${data.repos}</h5>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card text-center">
                      <div class="card-body">
                          <h3 class="card-title">Followers</h3>
                          <h5>${data.followers}</h5>
                      </div>
                  </div>
              </div>
              <div class="col-md-2"></div>
          </div>
          <br>
          <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-4">
                  <div class="card text-center">
                      <div class="card-body">
                          <h3 class="card-title">GitHub Stars</h3>
                          <h5>${data.stars}</h5>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card text-center">
                      <div class="card-body">
                          <h3 class="card-title">Following</h3>
                          <h5>${data.following}</h5>
                      </div>
                  </div>
              </div>
              <div class="col-md-2"></div>
          </div>
      </main>
  </div>
  <div id="pageFooter"></div>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>`;
}

module.exports = generateHTML