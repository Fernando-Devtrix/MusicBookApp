//import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';
//import { decamelize } from '@ember/string';
//import { pluralize } from 'ember-inflector';

export default ActiveModelAdapter.extend({
    // pathForType () {
    //     var decamelized = decamelize("musicBook");
    //     return pluralize(decamelized);
    //   },
   host: 'https://evening-cove-21405.herokuapp.com'
});
