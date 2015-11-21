var defaultLoadAccount = 4;

angular.module('grisbiClientWebApp').controller('accountController', function (Category, Party, Transaction, $scope, $routeParams, $http, $location) {

	console.log("account controller | params : ", $routeParams);

	Transaction.fetch($routeParams.id).success(function(data) {
		$scope.transactions = data;
		$scope.accountName = $routeParams.name;
	});

	// load parties
	Party.fetch().success(function(data) {
		$scope.parties = data;
	});

	// load categories
	// permet l'autocompletion pendant la saisie d'une categorie
	Category.fetch().success(function(data) {
		$scope.categoriesui = data;
	});


	$scope.toggleDetail = function($index) {
        $scope.activePosition = $scope.activePosition == $index ? -1 : $index;
  };


	// date
	$scope.format = 'dd.MM.yyyy';
});
