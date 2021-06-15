// requiring modules
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require("cors");
const app = express()
const bodyParser = require('body-parser')

// port for express erver
const port = 3000

// cors options to allow ajax requests
const corsOptions = {
  // origin has to be replaced with the location of the website
  origin:['http://localhost:63342'],
  credentials:true,
  optionSuccessStatus:200
}

// set cookie same-site mode
const cookieMode = 'strict'

// middleware moduels
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors(corsOptions));

const loginToken = 'AlwinTest1234';

// function to check if login_id cookie is send with request
function validateCookies(req, res, next) {
  const cookies = req.cookies;
  if ('login_id' in cookies) {
    if (cookies.login_id === loginToken) {
      next();
    } else {
      res.status(403).send({message: 'no Authorization'});
    }
  } else {
    res.status(403).send({message: 'no Authorization'});
  }
}

// function to log in
app.post('/login', (req, res) => {
  // check if login data is valid
  if (req.body.username === 'Alwin' && req.body.password === 'test') {
    if (cookieMode === 'strict') {
      // send cookie with strict same-site policy
      res.cookie('login_id', loginToken, {sameSite: "strict"});
    } else {
      res.cookie('login_id', loginToken);
    }
    res.status(200).json({message: 'Der Login war erfolgreich'});
  } else {
    res.status(300)
    res.send({
      message: 'Die eingegebenen Daten sind nicht korrekt',
    })
  }
})

// function to buy tickets that validates if the user who makes the request send the login_id cookie
app.post('/booking', validateCookies, (req, res) => {
  res.status(200).json({msg: 'Tickets booked. Email has been send to ' + req.body.email});
  console.log('tickets booked -> send to: ', req.body.email);
})

// start express server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
