const Resource = require("./model")

const checkResource = async (req, res, next) => {
  const { resource_name } = req.body
  const foundResource = await Resource.checkResourceName(resource_name)
  if  (foundResource !== undefined) {
    next({
      status: 400,
      message: `${resource_name} already exists`
    })
  } else {
    next()
  }
}

module.exports = {
 checkResource
}