angular.module('grisbiClientWebApp').controller('synthController', function (Account, Synthesis, $scope, $http, $location) {

	Synthesis.fetch().then(function(response) {
			$scope.synthesis = response.data;
	});

});
