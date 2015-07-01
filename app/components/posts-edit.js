import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'form',
	classNames: ['posts-edit'],

	actions: {
		cancel: function() {
			this.sendAction('cancel');
		}
	}

});
