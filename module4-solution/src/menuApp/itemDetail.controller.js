(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['$stateParams', 'items'];
function ItemDetailController(stateParams, items) {
  var itemDetails = this;
  // itemDetails.item = items[stateParams.itemId];
console.log('items: ', items.data.menu_items[stateParams.itemId].id);
  console.log('stateParams.itemId: ', stateParams.itemId);
  itemDetails.item = items.data.menu_items[stateParams.itemId];
}

})();
