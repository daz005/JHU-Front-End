(function () {
    'use strict';
  
    angular.module('NarrowItDownApp', [])
      .controller('NarrowItDownController', NarrowItDownController)
      .service('MenuSearchService', MenuSearchService)
      .directive('foundItems', FoundItemsDirective);
  
    function FoundItemsDirective() {
      return {
        restrict: 'E',
        templateUrl: 'foundItems.html',
        scope: {
          items: '<',
          onRemove: '&'
        },
        controller: function () {},
        controllerAs: 'directiveCtrl',
        bindToController: true
      };
    }
  
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var narrowItDown = this;
      narrowItDown.searchTerm = '';
      narrowItDown.found = [];
  
      narrowItDown.narrowItDown = function () {
        if (!narrowItDown.searchTerm.trim()) {
          narrowItDown.found = [];
          return;
        }
  
        MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm)
          .then(function (foundItems) {
            narrowItDown.found = foundItems;
          });
      };
  
      narrowItDown.removeItem = function (index) {
        narrowItDown.found.splice(index, 1);
      };
    }
  
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
      var service = this;
  
      service.getMatchedMenuItems = function (searchTerm) {
        return $http({
          method: 'GET',
          url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json'
        }).then(function (response) {
          var allItems = [];
  
          for (var key in response.data) {
            if (response.data.hasOwnProperty(key)) {
              var menuItems = response.data[key].menu_items;
              allItems = allItems.concat(menuItems);
            }
          }
  
          var found = allItems.filter(function (item) {
            return item.description.toLowerCase().includes(searchTerm.toLowerCase());
          });
  
          return found;
        });
      };
    }
  })();
  