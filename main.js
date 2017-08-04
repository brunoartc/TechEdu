const functions = require('firebase-functions');
const express = require('express');
const app = express();
const path = require('path');
var cookieParser = require('cookie-parser');
var admin = require("firebase-admin");
var request = require('request');


//Page files
var registrar = require('./pages/register');
var index = require('./pages/index').main;
var gmail = require('./pages/gmail').main;
var dashboard = require('./pages/dashboard').main;
var course = require('./pages/courses').main;

var firebaseUrl = require('./private/firebase_private').firebaseUrl
console.log(firebaseUrl("Oaa"));

app.use(cookieParser());

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var serviceAccount = require("./private/fireB.json");

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
    "user" : "unknown",
    "date" : "",
  });
  return text;
}

function getFromFirebase(url, callback) {
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
    if (reply[name] && reply[name]['pass']==passwd){
      getFromFirebase( firebaseUrl("get_cookie_auth", req), function (reply) {
      reply.user=name;
      reply.date=data()
      db.ref('cookies/' + req.cookies.auth).set(reply);
      res.redirect("/dashboard")
      });
    } else {
      res.status(403).send("Usuario ou senha incorretos, talvez queira registrar-se")
    }
  });
});




app.post('/registers', function(req, res) {
  authClient(req,res)
  var reg=Object()
  console.log(req.body);
  reg.user=req.body.user;
  var user=req.body.user;
  reg.name=req.body.name;
  reg.org=req.body.org;
  reg.email=req.body.email;
  reg.cel=req.body.cel;
  reg.lastlog=data();
  reg.psw=req.body.psw;
  var simsim ="batata"
  //res.send(reg.user + "registro = " + String(reg.keys) + " ja pode logar");
  console.log(reg.keys);
  if (1==1){
    getFromFirebase( firebaseUrl("get_user_auth", req), function (reply) {
      if (reply===null) reply={user:"unknown",org:"unknown",lastlog:"unknown",passwd:"unknown"}
      reply.user=reg.user;
      reply.name=reg.name;
      reply.org=reg.org;
      reply.email=reg.email;
      reply.cel=reg.cel;
      reply.lastlog=reg.lastlog;
      reply.pass=reg.psw;
      reply.courses={
        "locked":{
          "url":"https://player.vimeo.com/video/121712712"
        }},
      db.ref('users/' + user).set(reply);
      db.ref('cookies/' + req.cookies.auth).set({
        "user":user,
        "date":data(),
      });
      res.send(user + "registro = " + reg + " ja pode logar");
    });
  }
});

app.get('/', function (req, res) {
  authClient(req,res);
  getFromFirebase( firebaseUrl("get_organizations", req), function (reply){
    var prop = Object().firebase =reply
    res.send(index(prop))
    console.log("prop= " + Object.keys(prop));
  });
});

app.get('/register', function (req, res) {
  authClient(req,res)
  getFromFirebase( firebaseUrl("get_organizations", req), function (reply){
    var prop = Object().firebase=reply
    res.send(registrar.register(prop))
  });
});

app.post('/email', function (req, res) {
  authClient(req,res);
  var prop=req.body
  res.send(gmail(prop))
})

app.get('/contato', function (req, res) {
  authClient(req,res);
  res.sendFile(path.join(__dirname + '/pages/contact.html'));
})

app.get('/dashboard', function (req, res) {
  authClient(req,res)
  getFromFirebase(firebaseUrl("get_cookie_auth", req), function (replyusr) {
    if (replyusr==null || replyusr.user==undefined || replyusr.user=="unknown"){
      res.send("nao autenticado");
    } else{
      console.log(Object.keys(replyusr) + " rescebi user= " + replyusr.user + " gerando " + firebaseUrl("get_courses_all_auth", req, replyusr.user));

      getFromFirebase(firebaseUrl("get_courses_all_auth", req, replyusr.user), function (reply){
        console.log("a reply tem = " + reply + " do " + firebaseUrl("get_courses_all_auth", req, replyusr.user));
        var prop = Object()
        prop.courses = reply
        prop.user = replyusr.user
        console.log(prop.courses);
        res.send(dashboard(prop))
      });
    }
  });
});



app.get('/curso', function (req, res) {
  console.log("veio o " + req.query.curso);
  authClient(req,res)
  getFromFirebase(firebaseUrl("get_cookie_auth", req), function (replyusr) {
    if (replyusr==null || replyusr.user==undefined || replyusr.user=="unknown"){
      res.send("nao autenticado");
    } else {
      console.log(Object.keys(replyusr) + " rescebi user= " + replyusr.user + " gerando " + firebaseUrl("get_courses_all_auth", req, replyusr.user));

      getFromFirebase(firebaseUrl("get_courses_all_auth", req, replyusr.user), function (reply){
        console.log("a reply tem = " + Object.keys(reply) + " do " + firebaseUrl("get_courses_all_auth", req, replyusr.user));
        var prop = Object()
        prop.courses = reply

        prop.user = replyusr.user

        if (reply[req.query.curso]!=undefined && reply[req.query.curso].url){

          prop.url=reply[req.query.curso].url

          if (reply[req.query.curso].info){
            prop.info=reply[req.query.curso].info
          }
          res.send(
        course(prop))
        } else res.status(403).send("Desculpa acesso negado")
      });
    }
  });
});

app.use('/static', express.static('static'));

app.listen(8000, function () {
  console.log('Server started')
});
