// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('resources')
}

const getResourceById = async (resourceId) => {
    const resource = await db('resources')
        .where('resource_id', resourceId)
    return resource
}

const checkResourceName = async (resourceName) => {
    const [foundResourceName] = await db('resources').where('resource_name', resourceName)
    return foundResourceName
}

const create = async (resource) => {
    const [newResourceId] = await db('resources').insert(resource)
    const [newResource] = await getResourceById(newResourceId)
    return newResource
}

module.exports = {
getAll,
getResourceById,
checkResourceName,
create
}