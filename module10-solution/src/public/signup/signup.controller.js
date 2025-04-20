(function () {
    'use strict';
  
    angular.module('public')
      .controller('SignUpController', SignUpController);
  
    SignUpController.$inject = ['MenuService', 'UserService'];
    function SignUpController(MenuService, UserService) {
      var signupCtrl = this;
      signupCtrl.user = {};
      signupCtrl.invalidDish = false;
      signupCtrl.success = false;
  
      signupCtrl.validateDish = function () {
        if (!signupCtrl.user.favDish) return;
        MenuService.getMenuItem(signupCtrl.user.favDish).then(function (data) {
          signupCtrl.invalidDish = !data;
        });
      };
  
      signupCtrl.submit = function () {
        MenuService.getMenuItem(signupCtrl.user.favDish).then(function (data) {
          if (data) {
            signupCtrl.invalidDish = false;
            signupCtrl.success = true;
            UserService.saveUser(signupCtrl.user);
          } else {
            signupCtrl.invalidDish = true;
            signupCtrl.success = false;
          }
        });
      };
    }
  })();
  