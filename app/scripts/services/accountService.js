"use strict";

angular.module('grisbiClientWebApp').provider("Account", function() {
    var _this = this, API_URI = '';

    _this.setURI = function(URI) {
	API_URI = URI + 'accounts';
    };

    _this.$get = [ '$http', function($http) {
	return {
	    fetch : fetch,
	    getBalanceByAccountId : getBalanceByAccountId,
	    getBalanceReconciledByAccountId : getBalanceReconciledByAccountId
	};

	function fetch() {
	    return $http({cache: true, url: API_URI, method: 'GET'});
	}

	function getBalanceByAccountId(accountId) {
	    return $http.get(API_URI + '/' + accountId + '/balance');
	}

	function getBalanceReconciledByAccountId(accountId) {
	    return $http.get(API_URI + '/' + accountId + '/balance/reconciled');
	}

    } ];
});
