import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'section',
	classNames: ['show-container-item'],

	actions: {
		back: function() {
			this.sendAction('action');
		}
	}

});