(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.checkIftooMuch = function(){

    $scope.message = $scope.lunchList;
    $scope.alertType = 'success';
  };
}

})();
