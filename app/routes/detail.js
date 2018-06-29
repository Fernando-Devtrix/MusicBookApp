import Route from '@ember/routing/route';

export default Route.extend({
    model (params) {
		return this.store.findRecord('music-book', params.id);
    },
    
    actions: {

		willTransition () {
			let musicBook = this.get('controller.model');
			musicBook.rollbackAttributes();
		}
    }


});
