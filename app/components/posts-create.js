import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'form',
	classNames: ['posts-create'],

	actions: {
		save: function() {
			this.sendAction('action', this.getProperties('url', 'caption'));
			$('.posts-create').slideToggle();
			this.set('url');
			this.set('caption');
		}
	}

});