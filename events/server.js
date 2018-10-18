// Core Node modules
var express = require('express');
var http = require('http');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');

//Parse all from data
app.use(bodyParser.urlencoded({extended: true}));

//Used for formatting dates
var dataFormat = require('dateformat');
var now = new Date();

// This is view engine, Template parsing, we are using EJS types
app.set('view engine', 'ejs');

//Import all related Javascript and css files to inject in our App
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

//Connect to Server
var server = app.listen(4000,function(){
    console.log("Server started on port 4000..");
})