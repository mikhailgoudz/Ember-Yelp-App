'use strict';

module.exports = function(environment) {
  let ENV = {
  
    modulePrefix: 'ember-apollo-example',
    environment,
    rootURL: '/',
    locationType: 'auto',
    
    apollo: {
      //apiURL: '/api'
      apiURL:
        'http://node-express-env.zqxi3wpmdm.us-east-2.elasticbeanstalk.com/yelp'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }


  try {
    const firebase = require('./firebase');
    const maps = require('./googlemaps');
    ENV.firebase = firebase.config.firebase;
    ENV['g-map'] = maps.config.maps;
  } catch (err) {
    console.log('config/firebase_config.js not found');
    console.log('config/maps_config.js not found');
  }

  return ENV;
};
