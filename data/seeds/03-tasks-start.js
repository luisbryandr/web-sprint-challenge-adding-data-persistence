const tasks = [
    {
      task_description: 'submit project',
      task_notes: 'wire Codegrade on Canvas with your Repo',
      task_completed: 0,
      project_id: 2
    },
    {
      task_description: 'Create Migration code',
      task_notes: '',
      task_completed: 1,
      project_id: 1
    },
    {
      task_description: 'Create Seed Data',
      task_notes: '',
      task_completed: 1,
      project_id: 1
    }
  ]
  
  exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('tasks').insert(tasks);
      });
  };
  