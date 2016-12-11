var MongoClient = require('mongodb').MongoClient

var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');

var staticPublic = path.join(__dirname, 'public');

var app = express();
var port = process.env.PORT || 3000;

// var mongoHost = process.env.MONGO_HOST;
// var mongoPort = process.env.MONGO_PORT || 27017;
// var mongoUser = process.env.MONGO_USER;
// var mongoPassword = process.env.MONGO_PASSWORD;
// var mongoDBName = process.env.MONGO_DB;

//not sure if these were suppose to be set manually if running on another system
var mongoHost = 'classmongo.engr.oregonstate.edu';
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = 'cs290_laranavm';
var mongoPassword = 'VmTfHHKCUxfR5qb';
var mongoDBName = 'cs290_laranavm';
var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;
var mongoDB;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
app.use(express.static(staticPublic));
app.use(bodyParser.json());

app.get('/', function(req, res) {

  res.status(200).render('index-page', {
    title: 'TheBikeLocker',
  });
});

app.get('/BikeLocker', function(req, res) {

  var collection = mongoDB.collection('bikes')
  collection.find({}).toArray(function (err, bikes) {

  if (err) {

    console.log("== Error fetching bikes from database:", err);
    res.status(500).send("Error fetching bikes from database: " + err);
  } else {

      res.render('Locker', {

        title: 'Locker',
        bikes: bikes
      });
    }
  });
});

app.get('/ReportBike', function(req, res) {

  res.status(200).render('AddBike-page', {

    title: 'Report Stolen',
  });
});

app.get('/BikeLocker-:bike', function(req, res, next) {

  var collection = mongoDB.collection('bikes');
  collection.find({ serial: req.params.bike }).toArray(function (err, bikes) {

    if(err) {

      console.log("== Error fetching bike (", req.params.bike, ") from database:", err);
      res.status(500).send("Error fetching bike from database: " + err);
    }
    else if (bikes.length >= 1 ) {

       var bike = bikes[0];
       res.render('bike-page', {

          title: bike.what,
          what: bike.what,
          where: bike.where,
          when: bike.when,
          serial: bike.serial,
          Owner: bike.Owner,
          details: bike.details,
          image: bike.image,
       });
    }
    else {

        next();
    }
  });
});

app.get('/Search', function(req, res) {

  res.render('search-page', {

    title : 'Search log'
  });
});

app.post('/BikeLocker/add-photo', function (req, res, next) {

  if (req.body.what) {

    var collection = mongoDB.collection('bikes');
    collection.insertOne({

      what: req.body.what,
      where: req.body.where,
      details: req.body.details,
      when: req.body.when,
      serial: req.body.serial,
      image: req.body.image

    }, function (err, result) {
        if (err) {

          console.log("== Error inserting photo for person (", req.params.person, ") from database:", err);
          res.status(500).send("Error inserting photo itnto database: " + err);
        }
        res.status(200).send();
      });
  }
  else {

    res.status(400).send("Person photo must have a URL.");
  }
});

app.get('*', function (req, res) {

  res.status(404).render('404-page', {

    title: 'ooops'
  });
});

MongoClient.connect(mongoURL, function (err, db) {
    if (err) {
      console.log("== Unable to make connection to MongoDB Database.")
      throw err;
    }

    mongoDB = db;
    app.listen(port, function () {

      console.log("== Listening on port", port);
    });
});
