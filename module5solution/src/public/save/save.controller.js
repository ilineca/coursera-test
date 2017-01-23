(function () {
"use strict";

angular.module('public')
.controller('SaveController', SaveController);

SaveController.$inject = ['menuItem'];
function SaveController(menuItem) {
  var saveCtrl = this;
  console.log(menuItem);
  //saveCtrl.menuItem = menuItem;
// menuItem.then(function(response){
//   saveCtrl.menuItem = response.data;
// }).catch(function(error){
//   console.log("Egati errorraa!!! ", error);
// });

}


})();
