/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
      'default-src': "'self'",
      'script-src': "'self' api.forecast.io",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' maps.googleapis.com api.parse.com",
      'img-src': "'self'",
      'style-src': "'self' cdnjs.cloudflare.com maxcdn.bootstrapcdn.com fonts.googleapis.com",
      'media-src': "'self'"
    },
    modulePrefix: 'image-board',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      applicationId: 'NBJWNaL5Z6pnFQO4FMqurU51OTbUFGEqZkxPSOEZ',
      restApiId: 'gm0RkjpsoZDhxkfkLu5OcnUzuFGCH1OgIQDOqmdB'
    },
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
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
