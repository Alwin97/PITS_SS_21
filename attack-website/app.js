const express = require('express')
const app = express()
const port = 8080
const path = require('path')

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/attackerWebsite.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
