import Component from '@ember/component';

export default Component.extend({
    author: null,
    onModelDelete() {

    },
    actions: {
        deleteModel (author) {
            this.onModelDelete(author);
        }
    }
});
