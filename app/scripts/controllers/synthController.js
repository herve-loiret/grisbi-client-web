angular.module('grisbiClientWebApp').controller('synthController', function(Currency, Account, $scope, $http, $location) {

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
	    var accountType = account.accountType.toUpperCase();

	    // get balances and total balances
	    Account.getBalanceByAccountId(account.id).then(calculateBalance(account));
	    Account.getBalanceReconciledByAccountId(account.id).then(calculateBalanceReconcilied(account));
	}
    });
    

    // use currency to dynamicaly display account currency
    Currency.fetch().then(function(response) {
	$scope.currencies = response.data;
    });
    
    var calculateBalance = function(account) {
	return function(response) {
	    account.balance = response.data;
	    var accountType = account.accountType.toUpperCase();
	    if (accountType === 'BANK' || accountType === 'CASH') {
		$scope.globalBalance += account.balance;
	    } else if (account.accountType.toUpperCase() === 'LIABILITY') {
		$scope.globalBalanceLiability += account.balance;
	    } else if (account.accountType.toUpperCase() === 'ASSET') {
		$scope.globalBalanceAsset += account.balance;
	    }
	};
    };

    var calculateBalanceReconcilied = function(account) {
	return function(response) {
	    account.balanceReconciled = response.data;
	    var accountType = account.accountType.toUpperCase();
	    if (accountType === 'BANK' || accountType === 'CASH') {
		$scope.globalBalanceReconciled += account.balanceReconciled;
	    } else if (account.accountType.toUpperCase() === 'LIABILITY') {
		$scope.globalBalanceLiabilityReconciled += account.balanceReconciled;
	    } else if (account.accountType.toUpperCase() === 'ASSET') {
		$scope.globalBalanceAssetReconciled += account.balanceReconciled;
	    }
	};
    };

});
