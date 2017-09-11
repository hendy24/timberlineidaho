var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

var Contact = require('../models/contact');

router.get('/sendMessage', (req, res) => {
  res.send('Hello, world!');
});

router.post('/sendMessage', (req, res) => {
  // get the form data
  // save the form data to the db
  // send the form data in an email
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'admin@gpsidaho.com',
      pass: '3Fb%GxYF64watxtw'
    }
  });

  var text = 'Hello world from \n\n' + req.body.name;
  var mailOptions = {
    from: 'webmaster@gpsidaho.com',
    to: 'kemish.hendershot@gmail.com',
    subject: 'Test Message',
    text: text, // plain text
    // html: '<b>Hello world</b>' // send HTML body instead
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(error);
      res.json({yo: 'error'});
    } else {
      console.log('Message sent: ' + info.response);
      res.json({ yo: info.response });
    };
  });

  // return success or error
});


module.exports = router;
