(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.checkIftooMuch = function(){
    var itemsCount = getIttemsArraySize($scope.lunchList);
    if(itemsCount == 0){
        $scope.message = 'Please enter data first';
    }else if(itemsCount <= 3){
        $scope.message = 'Enjoy!'
    }else if(itemsCount > 3){
        $scope.message = 'Too much!'
    }

  };

  var getIttemsArraySize = function(items){
    if(items == null || items == ''){
      return 0;
    }else{
      return items.split(',').length;
    }
  };


}

})();
