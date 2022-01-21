const projects = [
    {
        project_name: 'Sprint Challenge 2',
        project_description: 'Show your mastery of this weeks material',
        project_completed: 0
    },
    {
        project_name: 'Module Project 4',
        project_description: 'Data modeling practice',
        project_completed: 0
    },
    {
        project_name: 'Module Project 1',
        project_description: '',
        project_completed: 1
    }
]

exports.seed = function (knex) {
    //Deletes ALL existing entries
    return knex('projects').truncate()
        .then(function () {
            //Inserts seeed entries
            return knex('projects').insert(projects);
        });
};