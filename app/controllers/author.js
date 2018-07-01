import Controller from '@ember/controller';
import { computed } from '@ember/object';


export default Controller.extend({
    fullName: computed('firstName', 'lastName', 'nickname', function(){
        let firstName = this.get('firstName');
        let lastName = this.get('lastName');
        let nickname = this.get('nickname');
        // let age = this.get('age');

        return  `${firstName} ${lastName} ${nickname}`;
    })
});
