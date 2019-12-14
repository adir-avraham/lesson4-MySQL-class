const express = require('express');
const router = express.Router();
const pool = require('../db/pool');


router.post('/', async (req, res, next) => {

    const [query, params] = getShipsQuery(req.body);
     
    try{
        const result = await pool.execute(query, params);
        const [first] = result
        return res.json(first);
    } catch {
        return res.json("some error");
    }
})

function getShipsQuery(params) {
    return ['SELECT * FROM orders WHERE ship_city=? AND shipping_fee < ? ', [...Object.values(params)]];
}

module.exports = router;