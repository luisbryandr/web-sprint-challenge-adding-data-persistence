// build your `/api/tasks` router here
const express = require('express')

const router = express.Router()

const Task = require('./model')
const md = require('./middleware')


router.get('/', (req, res, next) => {
    Task.getAll()
        .then(task => {
            res.json(task)
        })
})

router.post('/', (req, res, next) => {
    Task.create(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(next)
})

module.exports = router;