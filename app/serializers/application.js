import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    typeForRoot: function(root) {
        if (root === 'results') {
            return 'movie';
        }
    }
});
