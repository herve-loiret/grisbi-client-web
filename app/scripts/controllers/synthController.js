angular.module('grisbiClientWebApp').controller('synthController', function (Account, Synthesis, $scope, $http, $location) {

	Synthesis.fetch().success(function(data) {
			$scope.synthesis = data;
	});

});
