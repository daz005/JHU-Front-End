
(function () {
    'use strict';
  
    angular.module('public')
      .controller('MyInfoController', MyInfoController);
  
    MyInfoController.$inject = ['UserService', 'MenuService'];
    function MyInfoController(UserService, MenuService) {
      var myInfoCtrl = this;
      myInfoCtrl.user = UserService.getUser();
      myInfoCtrl.menuItem = null;
  
      if (myInfoCtrl.user && myInfoCtrl.user.favDish) {
        MenuService.getMenuItem(myInfoCtrl.user.favDish).then(function (data) {
          myInfoCtrl.menuItem = data;
        });
      }
    }
  })();

