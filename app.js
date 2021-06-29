const express = require('express')
const app = express()
const port = 4200
const path = require('path')

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, '/login.html'));
});

app.get('/booking', function(req, res) {
  res.sendFile(path.join(__dirname, '/booking.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
