
(function () {
    'use strict';
  
    angular.module('common')
      .service('UserService', UserService);
  
    function UserService() {
      var service = this;
      var savedUser = null;
  
      service.saveUser = function (user) {
        savedUser = angular.copy(user);
      };
  
      service.getUser = function () {
        return savedUser || {};
      };
    }
  })();
  