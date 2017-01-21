(function () {
"use strict";

angular.module('public')
.controller('SaveController', SaveController);

SaveController.$inject = ['menuItemNumber'];
function SaveController(menuItemNumber) {
  var $ctrl = this;
  $ctrl.menuItemNumber = menuItemNumber;
}


})();
