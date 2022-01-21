// build your `/api/resources` router here
const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('get resources router wired')
})

router.post('/', (req, res, next) => {
    console.log('post resources router wired')
})

module.exports = router;