const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const nodemailer     = require('nodemailer');
const { USERNAME, PASSWORD } = require('./config/credentials');
const app            = express();

const port = 9000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Add headersv middlware are configureables, 
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// If you're going to use your own gmail
// Create a dev email for testing, if needed
// You have to allow less secure apps
// My Account >> Sign-in & Security >> Connected apps & sites >> Allow less secure apps: ON

// You're free to use whatever service you would like
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: USERNAME,     
    pass: PASSWORD  
  }                             
});

// HTTP POST route to accept POST data from 
app.post('/email', (req, res) => {
  const { name, email, phone, message, carMake, carModel, carYear, carInfo } = req.body;

  // Four important options for our mailOptions
  const mailOptions = {
    from: 'msantostheworks@gmail.com',      // Sender of the email 
    to: 'mnemenzo82@gmail.com',                              // Recipient of the email
    subject: `${name} has contacted you`,   // Subject of the email
    text: `${name} has a question:  ${message} || email : ${email} phone number: ${phone}`                          // Message of the email
    // html: '<h1>SUP DOOOD</h1>'           // Can be used in place of the text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent successfully' + info.response);
    }
  });
  res.end();
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});

//wesboss node tutorials / mlab - mongodb setup //