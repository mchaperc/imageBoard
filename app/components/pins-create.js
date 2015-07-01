import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'form',
	classNames: ['pins-create'],

	actions: {
		save: function() {
			this.sendAction('action', this.getProperties('url', 'caption'));
			$('.pins-create').slideToggle();
			this.set('url');
			this.set('caption');
		}
	}

});