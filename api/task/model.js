// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    const tasksDraft = await db('tasks').join('projects','tasks.project_id','=','projects.project_id')
    .select("tasks.tasks_id",
    "tasks.task_description",
    "tasks.task_notes",
    "tasks.task_completed",
    "projects.project_name",
    "projects.project_description")
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