(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'directives/foundItems.html',
    restrict: 'E',
    scope: {
      found: '<',
      onRemove: '&',
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function FoundItemsDirectiveController() {
  var list = this;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var menu = this;

  menu.getMatchedMenuItems = function(searchTerm){
    console.log("searchTerm: ", searchTerm);
    if(searchTerm === undefined || searchTerm === ''){
      menu.found = [];
      menu.nothingFound = true;
    }else{
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function(result){
         menu.found = result.data.menu_items;
         menu.nothingFound = (result.data.menu_items === undefined || result.data.menu_items.length === 0)
      });
    }
  }

  menu.removeItem = function(itemIndex){
    console.log("itemIndex: ", itemIndex);
    menu.found.splice(itemIndex, 1);
  }

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    var promise = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (result) {
        // process result and only keep items that match
        var allItems = result.data.menu_items;
        var found = [];

        for(var i = 0; i < allItems.length; i++){
          if(allItems[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
            found.push(allItems[i]);
          }
        }
        result.data.menu_items = found;
        return result;
    }).catch(function(error){
      console.log(error);
    });
    console.log("promise: ", promise);
    return promise;
  }

}



})();
