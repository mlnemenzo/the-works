const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const nodemailer     = require('nodemailer');
const { resolve }    = require('path');
const { USERNAME, PASSWORD } = require('./config/credentials');
const app            = express();

const port = 9000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(resolve(__dirname, 'public')));

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
app.post('/api/email', (req, res) => {
  const { name, email, phone, message } = req.body;

  // return res.send('Send the mail!!');

  // Four important options for our mailOptions
  const mailOptions = {
    from: 'msantostheworks@gmail.com',      // Sender of the email 
    to: 'mnemenzo82@gmail.com',                              // Recipient of the email
    subject: `${name} has contacted you`,   // Subject of the email
    // text: `${name} has a question:  ${message} || email : ${email} phone number: ${phone}`                          // Message of the email
    html: `<h1>${name} has a question:</h1>
          <br>
          <p>Message: ${message}</p>
          <br>
          <h2>Contact Info:</h2>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>`
                     // Can be used in place of the text
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

app.post('/api/email/appointment', (req, res) => {

  const { name, email, phone, message, tierLevel, selectServices, appointmentTime, carMake, carModel, carYear, carInfo, apptDate } = req.body;

  console.log('APPOINMENT BODY:', req.body);

  // return res.send('Send the mail for an appointment!!');

  // Four important options for our mailOptions
  const mailOptions = {
    from: 'msantostheworks@gmail.com',      // Sender of the email 
    to: 'mnemenzo82@gmail.com',                              // Recipient of the email
    subject: `${name} has scheduled an appointment!`,   // Subject of the email
    html: `<h1>${name} has scheduled an appointment on:</h1>
            <br>
            <p>Date: ${apptDate}</p>
            <p>Time: ${appointmentTime}</p>
            <br>
            <h2>Tier Level:</h2>
            <h2>${tierLevel}</h2>
            <h2>${selectServices}</h2>
            <h2>Car Info:</h2>
            <p>Make: ${carMake}</p>
            <p>Model: ${carModel}</p>
            <p>Year: ${carYear}</p>
            <p>Notes: ${carInfo}</p>
            <br>
            <h2>Client Info:</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>`         // Can be used in place of the text
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

app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});

//wesboss node tutorials / mlab - mongodb setup //

//mlab node connect to mongoose//