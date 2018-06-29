import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
            saveMusicBook (musicBook) {
                musicBook.save()
                    .then(() => console.log('Data Saved'))
                    .catch((err) => {
                        console.log(err);
                        alert("Something went wrong");
                    });
            }
        }
});
