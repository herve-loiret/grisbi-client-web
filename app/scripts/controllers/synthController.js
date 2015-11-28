angular.module('grisbiClientWebApp').controller('synthController', function(Account, $scope, $http, $location) {

    // on récupère tous les comptes :
    Account.fetch().then(function(response) {
	$scope.accounts = response.data;
	$scope.globalBalanceAsset = 0;
	$scope.globalBalanceAssetReconciled = 0;
	$scope.globalBalanceLiability = 0;
	$scope.globalBalanceLiabilityReconciled = 0;
	$scope.globalBalance = 0;
	$scope.globalBalanceReconciled = 0;

	// pour tous les comptes, on lance un traitement
	for (var i = 0; i < $scope.accounts.length; i++) {
	    var account = $scope.accounts[i];
	    var typeAccount = account.typeAccount.toUpperCase();

	    // get balances and total balances
	    Account.getBalanceByAccountId(account.id).then(calculateBalance(account));
	    Account.getBalanceReconciledByAccountId(account.id).then(calculateBalanceReconcilied(account));
	}
    });

    var calculateBalance = function(account) {
	return function(response) {
	    account.balance = response.data;
	    var typeAccount = account.typeAccount.toUpperCase();
	    if (typeAccount === 'BANK' || typeAccount === 'CASH') {
		$scope.globalBalance += account.balance;
	    } else if (account.typeAccount.toUpperCase() === 'LIABILITY') {
		$scope.globalBalanceLiability += account.balance;
	    } else if (account.typeAccount.toUpperCase() === 'ASSET') {
		$scope.globalBalanceAsset += account.balance;
	    }
	};
    };

    var calculateBalanceReconcilied = function(account) {
	return function(response) {
	    account.balanceReconciled = response.data;
	    var typeAccount = account.typeAccount.toUpperCase();
	    if (typeAccount === 'BANK' || typeAccount === 'CASH') {
		$scope.globalBalanceReconciled += account.balanceReconciled;
	    } else if (account.typeAccount.toUpperCase() === 'LIABILITY') {
		$scope.globalBalanceLiabilityReconciled += account.balanceReconciled;
	    } else if (account.typeAccount.toUpperCase() === 'ASSET') {
		$scope.globalBalanceAssetReconciled += account.balanceReconciled;
	    }
	};
    };

});
