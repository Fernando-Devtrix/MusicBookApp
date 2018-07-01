import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addMusicBook () {
            let title = this.get('title');
            let author = this.get('author');
            let price = this.get('price');
            let imgUrl = this.get('imgUrl');
            let newMusicBook = this.store.createRecord('music-book', {title, author, price, imgUrl});

            newMusicBook.save()
                .then(() => alert('Book Saved'))
                // .then(() => document.querySelector('.btn-advise').addEventListener('click', function() {
                //     document.getElementsByClassName('alert alert-success').style.display = 'block';
                // }));

			this.set('title', '');
			this.set('author', '');
			this.set('price', '');
			this.set('imgUrl', '');
        }
    }
});
