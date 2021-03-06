import DS from 'ember-data';

export default DS.Model.extend({


    firstName: DS.attr('string'),
    lastName:  DS.attr('string'),
    posts:     DS.hasMany('post'),
    comments:  DS.hasMany('comment'),
    fullName:  function () {
      var firstName = this.get('firstName');
      var lastName  = this.get('lastName');
      return '     ' + firstName + ' ' + lastName;
    }.property('firstName', 'lastName')

});
