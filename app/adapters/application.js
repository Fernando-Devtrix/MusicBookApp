import DS from 'ember-data';
import { decamelize } from '@ember/string';
import { pluralize } from 'ember-inflector';

export default DS.RESTAdapter.extend({
    pathForType () {
        var decamelized = decamelize("musicBook");
        return pluralize(decamelized);
      },
   host: 'https://evening-cove-21405.herokuapp.com'
});
