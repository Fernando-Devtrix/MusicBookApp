import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addMusicBook () {
            let title = this.get('title');
            let author = this.get('author');
            let price = this.get('price');
            let imgUrl = this.get('imgUrl');
            this.store.createRecord('music-book', {title, author, price, imgUrl}).save();

			
			this.set('title', '');
			this.set('author', '');
			this.set('price', '');
			this.set('imgUrl', '');
        }
    }
});
