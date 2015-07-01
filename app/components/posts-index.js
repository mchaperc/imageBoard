import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'div',
	classNames: ['post-container'],

	isEdit: false,

	actions: {
		edit: function() {
			this.set('isEdit', true);
		},
		cancel: function() {
			this.set('isEdit', false);
		}
	}

});