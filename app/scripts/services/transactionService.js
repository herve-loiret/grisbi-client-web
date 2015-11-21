"use strict";

angular.module('grisbiClientWebApp').provider("Transaction", function() {
  var _this   = this,
      API_URI = '';

  _this.setURI = function(URI) {
    API_URI = URI + 'transactions/';
  };

  _this.$get = ['$http', function($http) {
    return {
      fetch    : fetch
    };

    function fetch(idAccount) {
      return $http.get(API_URI + idAccount);
    }

  }];
});
