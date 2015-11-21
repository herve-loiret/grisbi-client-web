'use strict';

/**
 * @ngdoc overview
 * @name grisbiClientWebApp
 * @description
 * # grisbiClientWebApp
 *
 * Main module of the application.
 */
angular
  .module('grisbiClientWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, AccountProvider, TransactionProvider, PartyProvider, SynthesisProvider, CategoryProvider) {
    $routeProvider
      .when('/synth', {
            templateUrl: 'views/synth.html',
            controller : 'synthController'
        })
        .when('/account/:id/:name', {
            templateUrl: 'views/account.html',
            controller : 'accountController'
        })
        .otherwise({
            redirectTo: '/synth'
        });

    var URI = 'http://localhost:8080/GrisbiWebServer/rest/grisbiws/';
    AccountProvider.setURI(URI);
    TransactionProvider.setURI(URI);
    PartyProvider.setURI(URI);
    SynthesisProvider.setURI(URI);
    CategoryProvider.setURI(URI);
  });
