import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
            saveMusicBook (musicBook) {
                musicBook.save()
                alert('Data updated')
                .then(() => console.log('Data Saved'))
                .catch((err) => {
                        console.log(err);
                        alert("Something went wrong");
                    });
            },
            
            destroyMusicBook (musicBook) {
                let confirmDestruction = confirm("Are you sure to delete " + musicBook.title + " music book");
                if (confirmDestruction) {
                    musicBook.destroyRecord()
                    .then(() => {
                        console.log("Music Book was deleted");
                        this.transitionToRoute('list');
                    })
                    .catch((err) => {
                        console.log(err);
                        alert(musicBook.title + " hasn't been saved");
                    });
                }else{
                    console.log("Music Book was not deleted");
                }   
            }    
        }
});
