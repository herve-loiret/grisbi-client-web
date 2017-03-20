angular.module('grisbiClientWebApp').controller('partyController', function(Party, $scope, $http, $location) {

    Party.fetch().then(function(response) {
        $scope.parties = response.data;
    });

});
