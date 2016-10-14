import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tasks', function() {
    this.route('new');
    this.route('edit', { path: '/:task_id/edit' })
  });
  this.route('dashboard');
});

export default Router;
