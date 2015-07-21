import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('parseUser');
  },

  actions: {
    createUser: function(user) {
      user.save().then(function(){
        this.get('session').authenticate('authenticator:parse-token', {
          sessionToken: user.get('sessionToken')
        } ).then(function(){
          this.transitionTo('agreement');
        }.bind(this));

      }.bind(this) ,function(error){
        this.controllerFor('users.create').set('signupErrorMessage', error.error);
        console.log();
      }.bind(this));
    }
  }
});
