import DS from 'ember-data';

var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  timespent:DS.attr('string'),
  timeallocated:DS.attr('string'),
  createdat:DS.attr('string', {
          defaultValue: function() { return new Date(); }
      })
});

Todo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Learn Ember.js',
      timespent:'4h',
      timeallocated:'6h',
      createdat:' Fri Oct 14 2016 20:02:35 GMT+0530 (India Standard Time)',
      isCompleted: true
    },
    {
      id: 2,
      title: 'Try creating app',
      timespent:'4h',
      timeallocated:'6h',
      createdat:'Fri Oct 14 2016 20:02:35 GMT+0530 (India Standard Time)',
      isCompleted: false
    },
    {
      id: 3,
      title: 'write test cases',
      timespent:'4h',
      timeallocated:'6h',
      createdat:'Fri Oct 14 2016 20:02:35 GMT+0530 (India Standard Time)',
      isCompleted: false
    }
  ]
});

export default Todo;
