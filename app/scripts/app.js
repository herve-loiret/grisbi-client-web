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
    'ngTouch',
    'ui.bootstrap',
    'ui.select'
  ]);

angular.module('grisbiClientWebApp').config(function ($routeProvider) {
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

});


angular.module('grisbiClientWebApp').config(function (AccountProvider, TransactionProvider, PartyProvider, CategoryProvider, CurrencyProvider) {

  var URI = 'http://localhost:8080/grisbiweb/';
  AccountProvider.setURI(URI);
  TransactionProvider.setURI(URI);
  PartyProvider.setURI(URI);
  CategoryProvider.setURI(URI);
  CurrencyProvider.setURI(URI);
});
