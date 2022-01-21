
exports.up = async function(knex) {
    return await knex.schema
        .createTable('projects', table => {
            table.increments('project_id')//database auto generates primary key
            table.string('project_name', 128)
                .notNullable()//means required item
            table.string('project_description', 256)
            table.boolean('project_completed')
                .defaultTo(0)
        })
        .createTable('resources', table => {
            table.increments('resource_id')
            table.string('resource_name', 128)
                .unique()
                .notNullable()
            table.string('resource_desciption', 256)
        })
        .createTable('tasks', table => {
            table.increments('tasks_id')
            table.string('task_description', 128)
              .notNullable()
            table.string('task_notes', 256)
            table.boolean('task_completed')
              .defaultTo(0)
            table.integer('project_id')
              .unsigned()
              .notNullable()
              .references('project_id')
              .inTable('projects')
              .onDelete('RESTRICT')
        })
        .createTable('project_resources', table => {
            table.increments('project_resources_id')
            table.integer('project_id')
              .unsigned()
              .notNullable()
              .references('project_id')
              .inTable('projects')
              .onDelete('RESTRICT')
            table.integer('resource_id')
              .unsigned()
              .notNullable()
              .references('resource_id')
              .inTable('resources')
              .onDelete('RESTRICT')
              
        })
  
};

exports.down = async function(knex) {

  return await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
