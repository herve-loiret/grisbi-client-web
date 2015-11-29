var defaultLoadAccount = 4;

angular.module('grisbiClientWebApp').controller('accountController', function(Category, Party, Transaction, $scope, $routeParams) {

    Transaction.fetch($routeParams.id).success(function(data) {
	$scope.transactions = data;
	$scope.accountName = $routeParams.name;
    });

    // load parties
    Party.fetch().then(function(response) {
	$scope.parties = response.data;
	$scope.selectedParty= $scope.parties[0];
    });

    // load categories
    // permet l'autocompletion pendant la saisie d'une categorie
    Category.fetch().then(function(response) {
	$scope.categories = response.data;
	$scope.selectedCategory= $scope.categories[0];
    });

    // permet l'affichage des opérations ventilées
    $scope.toggleDetail = function($index) {
	$scope.activePosition = $scope.activePosition == $index ? -1 : $index;
    };

    // creation d'une transaction :
    $scope.createTransaction = function(newTransaction) {
	Transaction.create(newTransaction);
    }

    

    
    
    
    // gestion du datepicker :
    $scope.open = function($event) {
	$scope.status.opened = true;
    };
    $scope.status = {
	opened : false
    };
    $scope.format = 'dd/MM/yyyy';

});
