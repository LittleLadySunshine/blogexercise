import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return //calls api controller action that returns array of tweets
    var page_content;
      $.get( "http://www.twitter.com/redrayofsun", function(data){
        page_content = data;
});
  }

  UserRoute = Ember.Route.extend
  setupController: (controller, model) ->
    controller.set 'model', model
    controller.set 'tweets', @store.find('tweet')

});



// get request to api for list of tweets - call controller action for returned tweets -- put here
//make tweet model - for backend and front end, create migration for text -- belongs to post, post has many tweets
// in template, display tweets, checkbox - bind data so it gets sent to save action
// save action, where make a post model instance AND tweet model instance/s -- save action in the new post controller
//  - set the association
