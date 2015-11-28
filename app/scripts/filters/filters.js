angular.module('grisbiClientWebApp').filter('accountByType', function() {
    return function(accounts, types) {

	var out = [];

	angular.forEach(accounts, function(account) {
	    angular.forEach(types, function(type) {
		if (type === account.typeAccount) {
		    out.push(account);
		}
	    });
	});

	return out;
    }
});
