(function () {
"use strict";

angular.module('common')
.service('UserDataService', UserDataService);

function UserDataService() {
  var service = this;

  service.getUserData = function () {
    console.log("userData is being returned: ", service.userData);
    return service.userData;
  };

  service.setUserData = function (user) {
    service.userData = user;
    console.log("userData is set: ", service.userData);
  };

}

})();
