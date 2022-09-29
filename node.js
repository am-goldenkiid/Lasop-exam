// 1. Node js being a single threaded application means that all its operations are performed synchronously on a single thread i.e the execution of a line of code is dependent on the preceeding line of code

// 2. npm init

// 3. Nodemon is needed to always automatically restrat the node server when making changes to your node environment. 
// In order to configure your server to work with nodemon, change the default start scripts to "nodemon 'the name of the js file that your server is running on e.g app.js' and it will automatically initial nodemon anytime you input 'npm start' in your console"

// 4.
// const mysql = require('mysql');
// const express = require('express');
// const app = express();
// const PORT = 3000// define the PORT for your host

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: '<DB_NAME>'
// });

// connection.connect(function(err) {
//   if (err) console.error(err);
//   console.log("Connected!");
// });
// app.listen(PORT);

// 5. B

// 6. A

// 7. Types of HTTP requests:
//1. POST = this type of request is mainly used in form submissions. It is used to send new information to the server e.g a newly registered user
// 2. DELETE = this type of request is used to delete content from the server e.g when a user decides to delete their account on a social media website, a DELETE request is sent to the server
// 3. PUT = this type of request is used to send updates to the server based on already existing information e.g when a user decides to update their bio, status, or profile picture on a social media app
//4. PATCH = this type of request is used to send encrypted information to the server e.g a user's password

//8. 
// const fs = require('fs');
// fs.copyFile('the folder you want to copy from', 'the folder you want to copy the information to', (err) => {
//   if (err) throw err;
//   console.log('File was copied to destination');
// });

//9. 