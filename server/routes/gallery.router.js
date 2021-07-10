const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();
const galleryItems = require('../modules/pool.js');

// PUT route to add likes to images
router.put('/like/:id', (req, res) => {
    const imageId = req.params.id;
    // Query to increment likes of target id by 1
    const queryText = `UPDATE images SET likes=likes+1 WHERE id=$1;`;

    // send query to Database
    pool.query(queryText, [imageId])
        .then(dbResponse => {
            console.log('Added a like to image with id:', imageId);
            res.sendStatus(202);
        })
        .catch(error => {
            console.log('Error adding like to image. Error:', error);
        });
});

// GET route to database
router.get('/', (req, res) => {
    // Query to get all rows from the database
    const queryText = `SELECT * FROM images ORDER BY id ASC;`;

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