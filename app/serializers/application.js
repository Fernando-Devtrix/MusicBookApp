//import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';
import { underscore } from '@ember/string';

export default ActiveModelSerializer.extend({
    keyForAttribute(attr){
		return underscore(attr);
	}
});
