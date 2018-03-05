const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.delete('/:id', (req, res) => {
    let favId = req.params.id;
    console.log( 'deleting:', favId );
});

// GET all
router.get('/', (req, res) => {
  console.log( 'getting all favorites' );
}); // end route

// POST route
router.post('/', (req, res) => {
    console.log( 'adding faorite:', req.body );
}); // end post route

module.exports = router;
