var nodemailer = require('nodemailer');
var gmailAccount = require("../private/account.json");

exports.main = function (prop) {

  var transporter = nodemailer.createTransport(
    gmailAccount);

  var mailOptions = {
    from: prop.fname + " " + prop.lname + "<" + prop.email + ">",
    to: 'techeduinsper@gmail.com',
    subject: prop.subject + " <" + prop.email + ">",
    text: prop.message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  return ("Enviado com sucesso")
}
