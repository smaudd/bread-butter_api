const router = require('express').Router();
const pool = require('../../../../db');
const queries = require('../queries');

router.put('/modify', async (req, res, next) => {

    const { email, name } = req.body;

    // Make changes
    try {
        let user = await pool.query(queries.US_user_name, [email, name]);
        // User object
        user = user[0][0];
        res.status(200).send(user);
    } catch(err) {
        res.sendStatus(404);
        return next('User not found');
    }

})

module.exports = router;