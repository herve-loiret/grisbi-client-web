var defaultLoadAccount = 4;

angular.module('grisbiClientWebApp').controller('accountController', function($filter, Category, Party, Transaction, $scope, $routeParams) {

    // store create transaction informations
    $scope.newTransaction = {};
    
    Transaction.fetch($routeParams.id).success(function(data) {
	$scope.transactions = data.transactionsResponse;
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
	if($scope.activePosition == $index){
	    $scope.activePosition = -1;
	    $scope.transactions[$index].expanded = false;
	}else{
	    $scope.activePosition = $index;
	    $scope.transactions[$index].expanded = true;
	}
    };

    // creation d'une transaction :
    $scope.createTransaction = function(newTransaction) {

	//TODO change the temp information method... 
	var transaction = {};
	transaction.date = $filter('date')(newTransaction.date, "dd/MM/yyyy"); 
	transaction.accountId = $routeParams.id;
	transaction.categoryId = newTransaction.category.idCategory;
	transaction.subCategoryId = newTransaction.category.idSubCategory;
	transaction.debit = newTransaction.debit;
	transaction.credit = newTransaction.credit;
	
	Transaction.create(transaction);
    }

    // gestion de la pagination
    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };
    $scope.pageChanged = function() {
      console.log('Page changed to: ' + $scope.currentPage);
    };
    
    $scope.maxSize = 10;
    $scope.totalItems = 50;
    $scope.currentPage = 3;
    $scope.itemsPerPage = 5;
    
    // gestion du datepicker :
    $scope.open = function($event) {
	$scope.status.opened = true;
    };
    $scope.status = {
	opened : false
    };
    $scope.format = 'dd/MM/yyyy';

});
