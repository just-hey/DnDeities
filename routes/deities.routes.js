const express = require('express')
const router = express.Router()
const { DeitiesController } = require('../controllers')


router.get('/', DeitiesController.viewAll)
router.get('/:id', DeitiesController.viewOne)


module.exports = router
