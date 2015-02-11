import Ember from 'ember';

export default Ember.Route.extend({

  afterModel: function (model) {
    model.reload();
  },

  model: function (params) {
    return this.store.find('post', params.post_id);
  }

});

// what is a hook?
//Ember generates all of this for you if you don't declare specifications.
// Model hook by default does nothing. but if we put a function value it will be run
//before model hook, after model hook ---  order doesn't matter on the page.
