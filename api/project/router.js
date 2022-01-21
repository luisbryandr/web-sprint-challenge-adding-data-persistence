const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('get project router wired')
})

router.post('/', (req, res, next) => {
    console.log('post project router wired')
})

module.exports = router;