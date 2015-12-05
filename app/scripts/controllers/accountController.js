var defaultLoadAccount = 4;

angular.module('grisbiClientWebApp').controller('accountController', function($filter, Category, Party, Transaction, $scope, $routeParams) {

    // store create transaction informations
    $scope.newTransaction = {};
    
    Transaction.fetch($routeParams.id).success(function(data) {
	$scope.transactions = data;
	$scope.accountName = $routeParams.name;
    });

    // load parties
    Party.fetch().then(function(response) {
	$scope.parties = response.data;
	$scope.newTransaction.party= $scope.parties[0];
    });

    // load categories
    // permet l'autocompletion pendant la saisie d'une categorie
    Category.fetch().then(function(response) {
	$scope.categories = response.data;
	$scope.newTransaction.category= $scope.categories[0];
    });

    // permet l'affichage des opérations ventilées
    $scope.toggleDetail = function($index) {
	$scope.activePosition = $scope.activePosition == $index ? -1 : $index;
    };

    // creation d'une transaction :
    $scope.createTransaction = function(newTransaction) {
	newTransaction.date = $filter('date')(newTransaction.date, "dd/MM/yyyy"); 
	newTransaction.accountId = $routeParams.id;
	Transaction.create(newTransaction);
    }

    // gestion de la pagination
    $scope.totalItems = 64;
    $scope.currentPage = 4;
    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };
    $scope.pageChanged = function() {
      console.log('Page changed to: ' + $scope.currentPage);
    };
    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
    
    // gestion du datepicker :
    $scope.open = function($event) {
	$scope.status.opened = true;
    };
    $scope.status = {
	opened : false
    };
    $scope.format = 'dd/MM/yyyy';

});
