const projectResources = [
    {
        project_id: 1,
        resource_id: 1
    },
    {
        project_id: 1,
        resource_id: 2
    },
    {
        project_id: 2,
        resource_id: 3
    },
    {
        project_id: 3,
        resource_id: 2
    }
]
exports.seed = function (knex) {
    return knex('project_resources').truncate()
        .then(function () {
            return knex('project_resources').insert(projectResources)
        })
}