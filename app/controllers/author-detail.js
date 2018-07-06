import Controller from '@ember/controller';


export default Controller.extend({
    actions: {
        saveAuthor (author) {
            author.save()
            .then(() => {
                alert('Data Updated')
                let confirmReturningToAuthorList = confirm('Do you wanna go to authors list');
                if (confirmReturningToAuthorList) {
                    this.transitionToRoute('author');
                }
            })
        },

        destroyAuthor (author) {
            let confirmAuthorDestruction = confirm("Are you sure to delete this author?");
            if (confirmAuthorDestruction) {
                author.destroyRecord()
                .then(() => {
                    console.log("Author deleted");
                    this.transitionToRoute('author');
                });
            }
        },
        
    }
});
