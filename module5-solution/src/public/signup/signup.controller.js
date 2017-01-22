(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'UserDataService'];
function SignupController(MenuService, UserDataService) {
  var regCtrl = this;
  regCtrl.message = '';
  regCtrl.saveUserData = function(){
    MenuService.getMenuItem(regCtrl.user.favoriteDish).then(function(response){
      console.log("then.response.data: ", response.data);
      UserDataService.setUserData(regCtrl.user);
      regCtrl.message = 'Your information has been saved';
    }).catch(function(error){
      console.log("then.response.error: ", error);
      regCtrl.message = 'No such menu number exists';
    });

  }
}


})();
