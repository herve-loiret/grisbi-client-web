angular.module('grisbiClientWebApp').controller('synthController', function (Account, Synthesis, $scope, $http, $location) {


	// on récupère tous les comptes :
	Account.fetch().then(function(response) {
    $scope.accounts = response.data;

		// pour tous les comptes, on lance un traitement
		for (var i = 0; i < $scope.accounts.length; i++) {

			var account = $scope.accounts[i];
			
			// get balances
			account.balance = Account.getBalanceByAccountId(account.id);
			account.balancePointed = Account.getBalanceByAccountId(account.id);
		}
  });






	Synthesis.fetch().then(function(response) {
			$scope.synthesis = response.data;
	});

});
