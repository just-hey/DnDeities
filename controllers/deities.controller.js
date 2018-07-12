const { Deities } = require('../models')


function viewAll(req, res, next) {
    Deities.viewAll()
        .then(deities => res.status(200).send(deities))
        .catch(err => next(err))
}

function viewOne(req, res, next) {
    Deities.viewOne(req.params.id)
        .then(deity => {
            if (!deity) throw new Error('deitynotfound')
            return res.status(200).send(deity)
        })
        .catch(err => next(err))
}


module.exports = { viewAll, viewOne }
