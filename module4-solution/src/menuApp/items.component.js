// 7. Create `items.component.js` file and create a component called `items`
// that shows all of the menu items for a particular category.
(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/menuApp/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
