import Controller from '@ember/controller';
import { computed } from '@ember/object';


export default Controller.extend({
    actions: {
        addNewAuthor () {
            let first_name =  this.get('first_name');
            let last_name = this.get('last_name');
            let nickname = this.get('nickname')
            
            let newAuthor = this.store.createRecord('author', {first_name, last_name, nickname}); 

            newAuthor.save()
                .then(() => alert('Book Saved'))

            this.set('first_name', '');
            this.set('last_name', '');
            this.set('nickname', '');    
            }
    },

    fullName: computed('first_name', 'last_name', 'nickname', function(){
        let first_name = this.get('first_name');
        let last_name = this.get('last_name');
        let nickname = this.get('nickname');
        // let age = this.get('age');

        return  `${first_name} ${last_name} ${nickname}`;
    })
});
