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
