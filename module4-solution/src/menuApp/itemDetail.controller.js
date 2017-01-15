(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['$stateParams', 'items'];
function ItemDetailController(stateParams, items) {
  var itemDetails = this;
  itemDetails.item = items.data.menu_items[stateParams.itemId];
}

})();
