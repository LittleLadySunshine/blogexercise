import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts', { path: 'posts' }, function () {
      this.route('new');
      this.resource('post', { path: '/:post_id' }, function (){
          this.route ('edit', { path: '/edit' });
          });
      });
  this.route("homepage", { path: '/' });

  this.route('users', function() {
    this.resource('user', { path: '/:user_id'});
  });

  this.route("tweets");
});
export default Router;

// resource refers to an entity or a collection of entities (posts -- with properties)
//after looking at posts, it'll look for an index template, if there is an index template it will render that
//the put info into outlett
