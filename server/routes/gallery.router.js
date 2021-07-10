const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();
const galleryItems = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET route to database
router.get('/', (req, res) => {
    // Query to get all rows from the database
    const queryText = `SELECT * FROM images;`;

    // send query to Database
    pool.query(queryText)
        .then(dbResponse => {
            console.log('Successfully retrieved all rows from DB');
            res.send(dbResponse.rows);
        })
        .catch(error => {
            console.log('Error retrieving DB contents. Error:', error);
            res.sendStatus(500);
        });
});

module.exports = router;