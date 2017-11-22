import { test } from 'qunit';
import moduleForAcceptance from 'vcan/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list places');

test('should show places as the home page.', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/places', 'should redirect automatically');
  });
});

test('should link to information about vcan.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should list available places.', function (assert) {
});

test('should filter the list of places by city.', function (assert) {
});

test('should show details for a selected place', function (assert) {
});
