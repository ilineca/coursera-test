(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
   var toBuyList = this;
   toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

   toBuyList.buyItem = function (itemName, quantity, itemIndex) {
     ShoppingListCheckOffService.buyItem(itemName, quantity, itemIndex);
   }

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
   var alreadyBoughtList = this;
   alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

}


function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [
    {name: "cookies", quantity: 10},
    {name: "candies", quantity: 15 },
    {name: "gingerbread cookie", quantity: 15 },
    {name: "macadamia nuts", quantity: 10 },
    {name: "apples", quantity: 20 },
    {name: "ginger lemonade", quantity: 3 }
  ];
  var alreadyBoughtItems = [];

  service.buyItem = function (itemName, quantity, itemIndex) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    alreadyBoughtItems.push(item);
    itemsToBuy.splice(itemIndex, 1);
    console.log("Already bought: ", alreadyBoughtItems);
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };

  service.getToBuyItems = function () {
    return itemsToBuy;
  };
}

})();
