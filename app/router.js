import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('loading');
    this.route('show', {path: '/:posts_id'});
    this.route('search');
  });
});

export default Router;