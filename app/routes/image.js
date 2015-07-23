import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  		filePick: function(params) {
  			var upload = this.store.createRecord('image', {
          filename: params.filename,
          url: params.url,
          owner: this.get('session.currentUser')
        })
  		console.log(params);
  		upload.save();
  	}
  },

  model: function() {
    return Ember.RSVP.hash({
      user: this.get('session.currentUser'),
      image: this.store.findQuery('image', {
        order: '-createdAt',

      })
    });
  },

});
