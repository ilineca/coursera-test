(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['menuItemNumber'];
function SignupController(menuItemNumber) {
  var $ctrl = this;
  $ctrl.menuItemNumber = menuItemNumber;
  $ctrl.message = 'test';
}


})();
