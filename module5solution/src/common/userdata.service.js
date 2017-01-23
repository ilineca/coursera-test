(function () {
"use strict";

angular.module('common')
.service('UserDataService', UserDataService);

function UserDataService() {
  var service = this;

  service.getUserData = function () {
    return service.userData;
  };

  service.setUserData = function (user) {
    service.userData = user;
  };

}

})();
