(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'UserDataService'];
// function SignupController(MenuService, UserDataService) {
//   var regCtrl = this;
//   regCtrl.message = '';
//
//   regCtrl.saveUserData = function(){
//      MenuService.getMenuItem(regCtrl.user.favoriteDish).then(function(response){
//        console.log("then.response: ", response);
//        regCtrl.menuItem = response;
//      });
//     console.log("MENU ITEM: ", menuItem);
//   }
// }

function SignupController(MenuService, UserDataService) {
  var regCtrl = this;
  regCtrl.message = '';

  regCtrl.saveUserData = function(){
    regCtrl.menuItem = MenuService.getMenuItem(regCtrl.user.favoriteDish).then(function(response){
      regCtrl.user.menuItem = response;
      UserDataService.setUserData(regCtrl.user);
      regCtrl.message = 'Your information has been saved';
    }).catch(function(error){
      regCtrl.message = 'No such menu number exists';
    });
  }
}


})();
