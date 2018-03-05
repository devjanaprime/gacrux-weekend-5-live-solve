const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Film = require('../models/swapi.models').Film;
const Person = require('../models/swapi.models').Person;

router.delete('/:id', (req, res) => {
    let favId = req.params.id;
    console.log( 'deleting:', favId );
    Film.findByIdAndRemove(
        { "_id": favId }, ( error, removedDocument ) => {
            if( error ){
                console.log('error on remove: ', error);
                res.sendStatus(500);
            } else{
                console.log('Document we removed: ', removedDocument);
                res.sendStatus(200);
            }
        } // end funk
    ) // end find and remove
});

// GET all
router.get('/', (req, res) => {
  console.log( 'getting all favorites' );
  Film.find({}, (error, foundFavorites) => {
      if (error) {
          console.log('error on find: ', error);
          res.sendStatus(500);
      } else {
          console.log('found Documents: ', foundFavorites);
          res.send(foundFavorites);
      }
    }); // end find
}); // end route

// POST route
router.post('/', (req, res) => {
    console.log( 'adding favorite:', req.body );
    let resourceType = req.body.resourceType;
    let favorite;
    if (resourceType == 'films') {
        favorite = new Film(req.body);
    }
    if (resourceType == 'people') {
        favorite = new Person(req.body);
    }
    console.log( 'favorite: ', favorite );

    // create a new Document in our database and collection
    favorite.save( ( error, savedDoc ) => {
        if( error ){
          console.log('error on save: ', error);
          res.sendStatus(500);
        } else {
          console.log('new Document: ', savedDoc);
          res.sendStatus(201);
        }
    }); // end save
}); // end post route

module.exports = router;
