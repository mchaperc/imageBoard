import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('pin');
	},
	actions: {
		showForm: function() {
			$('.pins-create').slideToggle();
		},
		save: function(params){
			var pin = this.store.createRecord('pin', params);
			pin.save();
      	}
	}
});
