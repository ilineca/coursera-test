angular.module('data')
.component('categories', {
  templateUrl: 'src/menuApp/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});
//
// Create `categories.component.js` file and create component called `categories`
// that shows all available categories in the menu to the user.
