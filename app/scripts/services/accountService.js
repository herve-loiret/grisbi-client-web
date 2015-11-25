"use strict";

angular.module('grisbiClientWebApp').provider("Account", function() {
  var _this   = this,
      API_URI = '';

  _this.setURI = function(URI) {
    API_URI = URI + 'accounts';
  };

  _this.$get = ['$http', function($http) {
    return {
      fetch                        : fetch,
      getBalanceByAccountId        : getBalanceByAccountId,
      getBalancePointedByAccountId : getBalancePointedByAccountId
    };

    function fetch() {
      return $http.get(API_URI);
    }

    function getBalanceByAccountId(accountId) {
      return $http.get(API_URI + '/' + accountId + '/balance');
    }

    function getBalancePointedByAccountId(accountId) {
      return $http.get(API_URI + '/' + accountId + '/balance/pointed');
    }

  }];
});
