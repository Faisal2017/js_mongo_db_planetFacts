var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require("path");

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/planets', function(err, database) {
  if (err) {
    console.log(err);
    return;
  };

  app.post('/facts', function(req, res) {
    database.collection('facts').save(req.body, function(err, result) {
      if (err) {
        console.log(err)
        return;
      }
      res.redirect('/');
    });
  });

  app.post('/delete', function(req, res) {
    database.collection('facts').drop();
    res.redirect('/');
  })

  app.get('/facts', function(req, res) {
    database.collection('facts').find().toArray(function(err, results) {
      res.json(results);
    });
  });

  app.get('/oneFact', function(req, res) {
    database.collection('facts').find().toArray(function(err, results) {
      res.json(results);
    })
  })

  console.log('Connected to database');

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');

});
