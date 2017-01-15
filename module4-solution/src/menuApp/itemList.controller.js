(function () {
'use strict';

angular.module('data')
.controller('ItemListController', ItemListController);


ItemListController.$inject = ['items'];
function ItemListController(items) {
  var categoryItems = this;
  categoryItems.items = items.data.menu_items;
}

})();
