import { test } from 'qunit';
import moduleForAcceptance from 'vcan/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list places');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});


test('should show places as the home page.', function (assert) {
});

test('should link to information about vcan.', function (assert) {
});

test('should link to contact information.', function (assert) {
});

test('should list available places.', function (assert) {
});

test('should filter the list of places by city.', function (assert) {
});

test('should show details for a selected place', function (assert) {
});
