const { Deities } = require('../models')


function viewAll(req, res, next) {
    Deities.viewAll()
        .then(deities => {
            res.status(200).send(deities)
        })
        .catch(err => next(err))
}


module.exports = { viewAll }
