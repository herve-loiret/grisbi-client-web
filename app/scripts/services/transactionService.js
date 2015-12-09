"use strict";

angular.module('grisbiClientWebApp').provider("Transaction", function() {
    var _this = this, API_URI = '';

    _this.setURI = function(URI) {
	API_URI = URI + 'transactions';
    };

    _this.$get = [ '$http', function($http) {
	return {
	    fetchPaginate	: fetchPaginate,
	    create   		: create
	};

	function fetchPaginate(idAccount, page, perPage){
		return $http.get(API_URI + '/' + idAccount + '/page/' + page + '/perpage/' + perPage);
	}

	function create(transaction) {
	    return $http.post(API_URI, transaction);
	}

    } ];
});
