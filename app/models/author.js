import DS from 'ember-data';
import { computed } from '@ember/object';
import { observer } from '@ember/object';


export default DS.Model.extend({
    first_name: DS.attr('string'),
    last_name: DS.attr('string'),
    nickname: DS.attr('string'),

    fullName: computed('first_name', 'last_name', 'nickname', function(){
        let first_name = this.get('first_name');
        let last_name = this.get('last_name');
        let nickname = this.get('nickname');
        // let age = this.get('age');

        return  `${first_name} ${last_name} ${nickname}`;
    }),

   
    fullNameChanged: observer('fullName', function() {
        // deal with the change
        console.log(`Name changed to: ${this.get('fullName')}`);
      })   
});
