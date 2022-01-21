
const db = require('../../data/dbConfig');

const getAll = async () => {
    const projectsRough = await db("projects")
    .select("*")
  const projects = projectsRough.map(project => {
    if (project.project_completed === 1) {
      return {
        ...project,
        project_completed: true,
      }
    } else if (project.project_completed === 0) {
      return {
        ...project,
        project_completed: false,
      }
    }
  })
  return projects
    
}

const getById = async (project_id) => {
    const [project] = await db("projects")
    .where("project_id", project_id)
  if (project.project_completed === 1) {
    return {
      ...project,
      project_completed: true,
    }
  } else if (project.project_completed === 0) {
    return {
      ...project,
      project_completed: false,
    }
  } else if (project.project_completed !== 1 || project.project_completed !== 0) {
    return {
      ...project,
      project_completed: false,
    }
  }
}


const create = async (project) => {
    const [newProjectId] = await db('projects').insert(project)
    const newProject = await getById(newProjectId)
    return newProject
}

module.exports =  {
    getAll,
    getById,
    create
}
