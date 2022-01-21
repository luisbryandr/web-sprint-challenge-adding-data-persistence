function checkProjectName (req, res, next) {
    const { project_name } = req.body
    if (!project_name) {
      next({
        status: 400,
        message: "projects must have a project_name"
      })
    } else {
      next()
    }
  }
  
  module.exports = {
    checkProjectName,
  }