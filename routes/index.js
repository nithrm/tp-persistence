var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});

router.get('/api/hotels', function(req, res, next){

    Hotel.findall()
    .then(function(hotels){

        res.send(hotels);

    })

})

router.get('/api/restaurants', function(req, res, next){

    Restaurant.findall()
    .then(function(restaurants){

        res.send(restaurants);

    })

})

router.get('/api/activities', function(req, res, next){

    Activity.findall()
    .then(function(activities){

        res.send(activities);

    })

})

module.exports = router;
