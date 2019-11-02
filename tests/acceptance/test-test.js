import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { authenticateSession } from 'ember-simple-auth/test-support';
// import DS from 'ember-data';
// import { A } from '@ember/array';
// import RSVP from 'rsvp';
import sinon from 'sinon';
// import EmberObject from '@ember/object';
// ember test --server
// 
module('Acceptance | main yelp search page', function(hooks) {
  let sandbox = sinon.createSandbox();
  setupApplicationTest(hooks);
  hooks.after(function() {
    sandbox.restore();
  });
  
  test('Logged out page is rendered correctly', async function(assert) {
    await visit('/'); 
    assert.equal(currentURL(), '/', 'we have successfully reached the main page of our app');
    assert.dom('.sign-in').exists('the sign in button exists');
  });
  
  test('Loged in page is rendered correctly', async function(assert) {
    await authenticateSession({
      userId: 1,
      displayName: 'Coolio'
    });
    await visit('/');
    assert.equal(currentURL(), '/', 'we have reached the main page');
    assert.dom('.sign-out').exists('the mandtory sign out button exists');
    assert.dom('.favorites').exists('the favorites button exists');
  });


  test('favorites page rendering correctly', async function(assert) {
    await authenticateSession({
      userId: 1,
      displayName: 'Buddy Boy'
    });
    await visit('/favorites');

    assert.equal(currentURL(), '/favorites');
    assert.dom('.results').exists();
    

  });
  
});