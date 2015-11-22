angular.module('grisbiClientWebApp').controller('headerController', function (Account, $scope) {

  Account.fetch().then(function(response) {
    $scope.accounts = response.data;
  });

});
