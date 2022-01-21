// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')
const md = require('./middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    Resources.getAll()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
})

router.post('/', md.checkResource,(req, res, next) => {
    Resources.create(req.body)
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(next)
})

module.exports = router;