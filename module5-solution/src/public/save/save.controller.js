(function () {
"use strict";

angular.module('public')
.controller('SaveController', SaveController);

SaveController.$inject = ['menuItem'];
function SaveController(menuItem) {
  var $ctrl = this;
  $ctrl.menuItem = menuItem;
}


})();
