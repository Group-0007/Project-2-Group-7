# Project 2 Team#07  

## Table-of-Contents
  
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation](#Installation)
  4. [Usage](#usage)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Contribution](#contributions)
  8. [Github](#github)
  9. [Deployment](#Deploy)
  
## User Stories

AS a home buyer/seller
I WANT a dating type blog site
SO THAT I can search and publish posts, contact posters and have a user-friendly dashboard


## Acceptance Criteria

GIVEN a real estate matching site.
WHEN I visit the site for the first time.
THEN I am presented with the homepage, which offers the option to log in or sign-up.
THEN I am logged into my dashboard.
WHEN I am logged in
THEN I remain logged into for the duration of my session
WHEN I click on the homepage option.
THEN I am taken to the homepage with existing posts.
WHEN I use the filter function to search.
THEN I am shown the results of my search.
WHEN I “upvote” a post.
THEN I can click into my dashboard and see it posted there.
WHEN I click on a post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment and contact the post creator
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved, and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I am browsing the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any posts I have already created and all the posts I have upvoted
WHEN I want to publish a post
THEN I am given the option to include information about my home and a picture.
WHEN I click publish.
THEN my post is published to the main page.
WHEN I click on one of my existing posts in the dashboard
THEN I can delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am signed out.

## Title

Residential Matchmaker

## Description

  Our site acts as a housing “dating” site where users can post their own houses and a description of their home for prospective buyers to view.  Prospective buyers can comment or vote on listed postings and contact sellers to initiate the home sale.

## Installation
  
This application requires installation of following packages to run successfully:
- npm init: The npm init command in the JSON language creates a package.json file for your    project's frontend
-  npm install mysql2: to create database
-  npm install sequelize: to connect to a MySQL database for your Models
- npm install express: to create API for your Controllers.
- npm install express-handlebars: to use Handlebars.js for your Views
- npm install jest: to test the application
- npm install dotenv: to use environment variables
- npm install bcrypt: to hash passwords
- npm install express-session: The express-session (Links to an external site.) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session.
- npm install connect-session-sequelize: to add authentication.
- npm install --save-dev nodemon: nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Usage

- Our application is used to search residential housing listings for buyers and sellers to buy and sell their residential properties. 
- To use this app, a user need to sign up and then search of desired listings. 
- A user can comment and vote on listings they like.

## Tests

- This application was test on backend using JEST npm framework.
- The application was tested on Insomnia to check its RESTful API functionality.

## Technologies Used

- JavaScript ES6
- Node.js
- Express.js
- dotenv
- MySQL
- Sequelize
- bcrypt
- handlebars.js
- Heroku
- JawsDB
- jest
- Insomnia

## Screenshots of application page

![image]()
![image]()

## License
  
This project is covered by MIT license ![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)
    
## Contributions

  This project was built by:
  
  - Lucas Pittam	(pittamlucas@gmail.com)
  - David Sklar	(davidhsklar@gmail.com)
  - Nathan Boulianne	(nbouliannework@gmail.com)
  - Reem Ahmed	(reem.mda0909@gmail.com)
  - Tommy Otis	()

## GitHub

  [GitHub](https://github.com/Group-0007/Project-2-Group-7)

## Deployed URL:

This application is deployed on Heroku:

[Heroku](https://residential-matchmaker.herokuapp.com/)