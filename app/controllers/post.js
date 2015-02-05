import Ember from 'ember';
export default Ember.ObjectController.extend({
  actions: {
    deletePost: function(post) {
      post.deleteRecord();
      post.save().then(function(){
        this.translationToRoute('posts');
      }.bind(this));
    }
  }
});
