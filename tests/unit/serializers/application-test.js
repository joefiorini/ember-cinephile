import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('serializer:application', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it returns movie as type for root results', function(assert) {
  var serializer = this.subject();
  assert.equal(serializer.typeForRoot('results'), 'movie');
});
