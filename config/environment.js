/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'final-project',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    filepickerKey: 'AXblnjPnoQ3GMMXyVeGNiz',


    APP: {
      applicationId: 'xowOA0wnBsBzYKXSwK0xBEjcZn6ROTqNUQZMYVQE',
        restApiId: 'TKetqikwAMcFBz5yClP9gpQ7KqEFnekWaEZjnLfv'
      },

      contentSecurityPolicy: {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
    'font-src': "'self' fonts.gstatic.com",
    'connect-src': "'self' maps.gstatic.com",
    'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com",
    'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
  },

  'simple-auth': {
authorizer: 'authorizer:parse',
crossOriginWhitelist: ['https://api.parse.com'],
routeIfAlreadyAuthenticated: 'questions.1',
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
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/FinalProject/';
    ENV.locationType = 'hash';
  }

  return ENV;
};
