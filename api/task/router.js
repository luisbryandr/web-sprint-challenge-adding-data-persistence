// build your `/api/tasks` router here
const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('get tasks router wired')
})

router.post('/', (req, res, next) => {
    console.log('post tasks router wired')
})

module.exports = router;