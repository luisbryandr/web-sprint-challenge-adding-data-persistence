const resources = [
    {
        resource_name: 'Knex Docs',
        resource_description: 'Official reference material',
    },
    {
        resource_name: 'Canvas',
        resource_description: 'Learning objectives, lessons, projects, and videos for students',
    },
    {
        resource_name: 'The Hub',
        resource_description: '',
    }
]


exports.seed = function (knex) {

    return knex('resources').truncate()
        .then(function () {
            return knex('resources').insert(resources);
        });
};