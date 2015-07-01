import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'div',
	classNames: ['pin-container'],

	actions: {
		edit: function() {
			console.log('edit');
		}
	}

});