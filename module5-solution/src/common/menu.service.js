(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath', '$filter'];
function MenuService($http, ApiPath, $filter) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (menuItemNumber) {
    return $http.get(ApiPath + '/menu_items/' + $filter('uppercase')(menuItemNumber) + '.json').then(function(response) {
    // return $http.get(ApiPath + '/menu_items/' + menuItemNumber + '.json').then(function (response) {
      return response.data;
    });
  };

}



})();
