const express = require('express')

const router = express.Router()

const Projects = require('./model');
const { checkProjectName } = require("./middleware");

router.get('/', async (req, res, next) =>{
    try{
        const projects = await Projects.getAll()
        res.json(projects)
    } catch(err){
            next(err)
        }
})

router.post('/', checkProjectName, async (req, res, next) =>{
    try {
        const newProject = await Projects.create(req.body)
        res.status(201).json(newProject)
        next()
    } catch(err){
        next(err)
    }
})



module.exports = router;