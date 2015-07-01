import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('post');
	},
	actions: {
		showForm: function() {
			$('.posts-create').slideToggle();
		},
		save: function(params){
			var post = this.store.createRecord('post', params);
			post.save();
      	},
      	cancel: function() {
      		console.log('cancel from route');
      	}
	}
});
