const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const userStrategy = require('../strategies/user.strategy');

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {

    console.log('got here', req.user);
    if(req.isAuthenticated()){
        pool.query(`SELECT * FROM "item" WHERE id = $1`, [req.user.id])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in GET routes');
            res.sendStatus(500);
        });
    } else {
    res.sendStatus(403); // For testing only, can be removed
    }

    res.sendStatus(200); // For testing only, can be removed
    

});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/',  (req, res) => {
    const newItem=req.body;
    const queryText = `INSERT INTO "item" ("description", "image_url", "person_id")
                        VALUES ($1, $2, $3)`
    pool.query(queryText, [newItem.description, newItem.image_url, newItem.person_id])
    .then((response)=> { 
        res.sendStatus(201);
        console.log(`error in post ${error}`);
    }).catch((error)=> {next(err); })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;