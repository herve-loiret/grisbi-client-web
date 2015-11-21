"use strict";

angular.module('grisbiClientWebApp').provider("Party", function() {
  var _this   = this,
      API_URI = '';

  _this.setURI = function(URI) {
    API_URI = URI + 'parties';
  };

  _this.$get = ['$http', function($http) {
    return {
      fetch    : fetch
    };

    function fetch() {
      return $http.get(API_URI);
    }

  }];
});
