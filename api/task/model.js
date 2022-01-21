// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    const tasksDraft = await db('tasks')
    const tasks = tasksDraft.map(task => {
        if(task.task_completed === 1 ) {
            return {
                ...task,
                task_completed: true,
            }
        }else {
            return {
                ...task,
                task_completed: false,
            }
        }
    })
    return tasks
}

module.exports = {
    getAll
}