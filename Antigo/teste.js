const express = require('express');
const app = express();
const path = require('path');
var cookieParser = require('cookie-parser');
var admin = require("firebase-admin");
var request = require('request');

request('https://techedu-1e7d4.firebaseio.com/cookies.json?access_token=wUThafuchU3ejecRa3h84ePh7ZAwuv', function (error, response, body) {
  console.log(body);
  if (!error && response.statusCode == 200) { // Print the google web page.
    console.log(123);
    console.log(body);
    var resp = JSON.parse(body);
    console.log(resp);
    if (typeof callback !== 'undefined') {
      callback(resp);
      console.log("reste=" + resp);
    }
    console.log("reste=" + resp);
  }
})
