(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userData'];
function MyInfoController(userData) {
  var miCtrl = this;
  miCtrl.message = '';
  miCtrl.userData = userData;
}

})();
