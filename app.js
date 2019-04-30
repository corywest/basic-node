var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fetch = require('node-fetch');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get("PORT"));

app.get('/hedgie', function(req, res) {
  fetch("https://hedgehog-party.herokuapp.com/api/v1/invites")
  .then((response) => response.json())
  .then((result) => console.log(result))

  res.send();
});

app.post('/hedgie', function(req, res) {
  fetch("https://hedgehog-party.herokuapp.com/api/v1/invites", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: "Sofie10",
      hoglets: 3,
      allergies: "advil"
    })
  })
  .then((response) => response.json())
  .then((result) => console.log(result))

  res.send();
});

app.delete('/hedgie/:id', function(req, res) {
  fetch("https://hedgehog-party.herokuapp.com/api/v1/invites/" + req.params.id, {
    method: "DELETE",
    headers: { 'Content-Type': 'application/json' }
  })

  res.send();
});




module.exports = app;
