angular.module('grisbiClientWebApp').controller('headerController', function (Account, $scope) {

  Account.fetch().success(function(data) {
    $scope.accounts = data;
  }).error(function(data, status, headers, config) {
    console.log('connection : %j', config);
  });

});
