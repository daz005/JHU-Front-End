(function() {
    'use strict';
  
    angular.module('ShoppingListCheckOff', [])
      .service('ShoppingListCheckOffService', function() {
        var service = this;
  
        // Initial "To Buy" list
        var toBuyItems = [
          { name: "cookies", quantity: 10, pricePerItem: 2 },
          { name: "chips", quantity: 20, pricePerItem: 3 },
          { name: "sodas", quantity: 30, pricePerItem: 1.5 },
          { name: "apples", quantity: 40, pricePerItem: 0.5 },
          { name: "bananas", quantity: 50, pricePerItem: 0.3 }
        ];
  
        var boughtItems = [];
  
        service.getToBuyItems = function() {
          return toBuyItems;
        };
  
        service.getBoughtItems = function() {
          return boughtItems;
        };
  
        service.buyItem = function(index) {
          var item = toBuyItems.splice(index, 1)[0];
          boughtItems.push(item);
        };
      })
  
      .controller('ToBuyController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        toBuy.buyItem = function(index) {
          ShoppingListCheckOffService.buyItem(index);
        };
      }])
  
      .controller('AlreadyBoughtController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
      }])
  
      .filter('customCurrency', function() {
        return function(input) {
          var total = input || 0;
          return total.toFixed(2);
        };
      });
  
  })();
  