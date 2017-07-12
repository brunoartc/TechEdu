const express = require('express');
const app = express();
const path = require('path');
var cookieParser = require('cookie-parser');
var admin = require("firebase-admin");
var request = require('request');


//Page files
var registrar = require('./register');

var firebaseUrl = require('./firebase_private').firebaseUrl
console.log(firebaseUrl("Oaa"));

app.use(cookieParser());

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var serviceAccount = require("./credentials/fireB.json");

var db = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseUrl("database_url"),
}).database();




function genCookie(){
  var text=""
  var ps="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@&-"
  for (var i = 0; i < 25; i++)
    text += ps.charAt(Math.floor(Math.random() * ps.length));
  db.ref('cookies/' + text).set({
    "user" : "",
    "date" : "",
  });
  return text;
}

function getFromFirebase( url, callback) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var resp = JSON.parse(body);
      if (typeof callback === 'function') {
        callback(resp);
      }
      return resp;
    }
  });
}

function authCookie(cookieAuth) {
  if (!cookieAuth.auth) {
    return 0;
  } else {
    return 1;
  }
}

function authClient(req, res) {
  if (!authCookie(req.cookies)) {
    res.cookie("auth",genCookie())
  }
}

function data(o=0) {
  var today = new Date();
  var dd = today.getDate()-o;
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10) {
      dd = '0'+dd
  }
  if(mm<10) {
      mm = '0'+mm
  }
  today = mm + '/' + dd + '/' + yyyy;
  return today;
}








app.post('/login', function(req, res) {
  authClient(req,res)
  var name = req.body.usr;
  var passwd = req.body.pass;
  getFromFirebase(firebaseUrl("get_users", req), function (reply) {
    if (reply[name] && reply[name]['passwd']==passwd){
      getFromFirebase( firebaseUrl("get_cookie_auth", req), function (reply) {
      reply.user=name;
      reply.date=data()
      db.ref('cookies/' + req.cookies.auth).set(reply);
      res.send(name + " " + passwd + reply);
      });
    } else {
      res.status(403).send("Usuario ou senha incorretos, talvez queira registrar-se")
    }
  });
});




app.post('/registers', function(req, res) {
  authClient(req,res)
  var user=req.body.user;
  var org=req.body.organization;
  var lastlog=data();
  var passwd=req.body.pass;
  var simsim ="batata"
  if (1==1){
    getFromFirebase( firebaseUrl("get_user_auth", req), function (reply) {
      if (reply===null) reply={user:"unknown",org:"unknown",lastlog:"unknown",passwd:"unknown"}
      reply.user=user;
      reply.org=org;
      reply.lastlog=lastlog;
      reply.passwd=passwd;
      db.ref('users/' + user).set(reply);
      db.ref('cookies/' + req.cookies.auth).set({
        "user":user,
        "date":data(),
      });
      res.send(user + " " + passwd + org + reply);
    });
  }
});



app.get('/', function (req, res) {
  authClient(req,res);
  //res.send("teste")
  res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/register', function (req, res) {
  authClient(req,res)
  getFromFirebase( firebaseUrl("get_organizations", req), function (reply){
    var prop = Object().firebase=reply
    res.send(registrar.register(prop))
  });
});




app.get('/cookie',function(req, res){
  authClient(req,res)

});

app.use('/static', express.static('static'));

app.listen(3000, function () {
  console.log('Server started')
});
