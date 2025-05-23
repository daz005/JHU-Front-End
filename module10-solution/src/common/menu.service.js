(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      //console.log("getCategories response.data=" + response.data);
      if (response) {
        if (response.data) {
          return response.data;
        }   
      }

      return null;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {

      //console.log("getMenuItems response.data=" + response.data);
      if (response) {
        if (response.data) {
          return response.data;
        }   
      }

      return null;

    });
  };


  service.getMenuItem = function (shortName) {
    //console.log("getMenuItem shortName=" + shortName);

    var category = shortName.charAt(0).toUpperCase();
    var index = parseInt(shortName.slice(1)) - 1;
    var url = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" +
              category + "/menu_items/" + index + ".json";
    return $http.get(url).then(function (response) {
      // console.log("getMenuItem response.data.getCategories=" + response.data.getCategories);
      // console.log(response.data);
      // console.log(url);

      if (response) {
        if (response.data) {
          response.data.categoryShortName = category;
          return response.data;
        }   
      }

      return null;     

    });
  };

};

})();





